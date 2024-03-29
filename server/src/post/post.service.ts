import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Content } from 'src/entities/content.entity';
import { Repository } from 'typeorm';
import { createPostDto } from 'src/DTO/create-post.dto';
import { changeVoteDto } from 'src/DTO/change-votes.dto';
import { VoteUser } from 'src/entities/vote-user.entity';
import { createCommentDto } from 'src/DTO/create-comment.dto';
import { CommentPost } from 'src/entities/comment-post.entity';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { ProfileService } from 'src/profile/profile.service';
import { Profile } from 'src/entities/profile.entity';
import { ReCawDto } from 'src/DTO/re-caw.dto';
import { ProfilePost } from 'src/entities/profile-post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Content) private postRepository: Repository<Content>,
    @InjectRepository(VoteUser)
    private VoteUserRepository: Repository<VoteUser>,
    @InjectRepository(CommentPost)
    private CommentPostRepository: Repository<CommentPost>,
    @InjectRepository(ProfilePost)
    private ProfilePostRepository: Repository<ProfilePost>,
    private ProfileService: ProfileService,
    @InjectRepository(Profile) private ProfileRepository: Repository<Profile>,
  ) {}

  async getAll(id: string) {
    const allPosts = await this.postRepository.find();
    const storage = getStorage();
    const profile = await this.ProfileRepository.findOneOrFail({
      id: id,
    });

    const allPostsLink = await Promise.all(
      allPosts.map(async (post) => {
        const imageURL = await getDownloadURL(
          ref(storage, `image/${post.image_id}.png`),
        )
          .then((url) => {
            return url;
          })
          .catch((err) => {
            return null;
          });
        post.image_id = imageURL;

        return post;
      }),
    );

    

    return allPostsLink;
  }

  async getById(postId: string) {
    const post = await this.postRepository.findOneOrFail({
      post_id: postId,
    });
    // const storage = getStorage();

    // post.image_id = await getDownloadURL(
    //   ref(storage, `image/${post.image_id}`),

    // );
    console.log(post.profile);
    return post;
  }

  async createPost(createPostDto: createPostDto, id: string) {
    const post = new Content();

    post.post_id = 'p' + Math.random().toString(36).slice(2, 12);
    post.text = createPostDto.post_text;
    post.votes = 0;
    post.recaws = 0;
    post.category = ''; // category will depend on tags
    post.image_id = createPostDto.image_url;

    const profile = await this.ProfileRepository.findOneOrFail({
      id: id,
    });

    post.profile = profile;
    await this.postRepository.save(post);
  }

  async changeVote(changeVoteDto: changeVoteDto, id: string) {
    const updateVotes = await this.postRepository.findOne({
      post_id: changeVoteDto.post_id,
    });
    const findUser = await this.ProfileRepository.findOne({
      id: id,
    });
    const vote = new VoteUser();
    vote.post = updateVotes;
    vote.op = findUser;
    if (changeVoteDto.type === 0) {
      updateVotes.votes = updateVotes.votes + 1;
      vote.VoteT = 0;
    } else if (changeVoteDto.type === 1) {
      updateVotes.votes = updateVotes.votes - 1;
      vote.VoteT = 1;
    } else {
      return 'Invalid arguments';
    }
    this.postRepository.save(updateVotes);
    this.VoteUserRepository.save(vote);
    return updateVotes;
  }

  async createComment(createCommentDto: createCommentDto, userId: string) {
    const comment = new CommentPost();
    comment.description = createCommentDto.text;
    const findUserProfile = await this.ProfileRepository.findOneOrFail({
      id: userId,
    });

    const findPost = await this.postRepository.findOneOrFail({
      post_id: createCommentDto.post_id,
    });
    comment.op = findUserProfile;
    comment.postId = findPost;
    await this.CommentPostRepository.save(comment);
  }

  async getComments(postId: string) {
    const getPostId = await this.postRepository.findOneOrFail({
      post_id: postId,
    });
    const com = await this.CommentPostRepository.find({
      postId: getPostId,
    });
    console.log(com);
    return com;
  }

  async reCaw(ReCawDto: ReCawDto, id: string) {
    const profile = await this.ProfileRepository.findOneOrFail({
      id: id,
    });

    const post = await this.postRepository.findOneOrFail({
      post_id: ReCawDto.postId,
    });
  }
}
