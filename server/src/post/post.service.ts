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

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Content) private postRepository: Repository<Content>,
    @InjectRepository(VoteUser)
    private VoteUserRepository: Repository<VoteUser>,
    @InjectRepository(CommentPost)
    private CommentPostRepository: Repository<CommentPost>,
  ) {}

  async getAll() {
    const allPosts = await this.postRepository.find();
    const storage = getStorage();
    const allPostsLink = await Promise.all(
      allPosts.map(async (post) => {
        const imageURL = await getDownloadURL(
          ref(storage, `image/${post.image_id}`),
        )
          .then((url) => {
            return url;
          })
          .catch((err) => {
            console.log(err);
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
    const storage = getStorage();

    post.image_id = await getDownloadURL(
      ref(storage, `image/${post.image_id}`),
    );
    return post;
  }

  async createPost(createPostDto: createPostDto, id: string) {
    const post = new Content();
    post.op_id = id;
    post.post_id = 'p' + Math.random().toString(36).slice(2, 12);
    post.text = createPostDto.post_text;
    post.votes = 0;
    post.recaws = 0;
    post.category = ''; // category will depend on tags
    post.comments = 0;
    post.image_id = createPostDto.image_url;
    await this.postRepository.save(post);
  }

  async changeVote(changeVoteDto: changeVoteDto, id: string) {
    const updateVotes = await this.postRepository.findOne({
      post_id: changeVoteDto.post_id,
    });

    const vote = new VoteUser();
    vote.post_id = changeVoteDto.post_id;
    vote.user_id = id;
    // user_id
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
    comment.post_id = createCommentDto.post_id;
    comment.description = createCommentDto.text;
    comment.user_id = userId;
    await this.CommentPostRepository.save(comment);
  }

  async getComments(postId: string) {
    console.log('hi there');
    return await this.CommentPostRepository.find({
      post_id: postId,
    });
  }
}
