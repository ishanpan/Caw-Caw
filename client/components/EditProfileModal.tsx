import {
  Avatar,
  Button,
  Checkbox,
  Input,
  Modal,
  Row,
  Text,
} from "@nextui-org/react";
import React, { Fragment, useEffect } from "react";

import Image from "next/image";
import Edit from "../public/cog-outline.svg";
function EditProfileModal(props: any) {
  const [visible, setVisible] = React.useState(false);

  useEffect(() => {
    console.log("i am changedd");
    setVisible(props.visible);
  }, [props.visible]);

  const closeHandler = () => {
    props.setVisible(false);
    console.log("closed");
  };

  return (
    <Fragment>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header justify="center">
          {/* <Text id="modal-title" size={18}>
            Edit Profile
          </Text> */}

          <Avatar
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            size="xl"
          />
        </Modal.Header>
        <Modal.Body autoMargin>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Name"
            value={props.name}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Bio"
            value={props.bio}
          />

          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Caw Handle"
            value={props.username}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto onClick={closeHandler}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}

export default EditProfileModal;
