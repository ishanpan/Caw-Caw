import {
  Avatar,
  Button,
  Checkbox,
  Input,
  Modal,
  Row,
  Text,
} from "@nextui-org/react";
import React, { Fragment, useEffect, useState } from "react";

import Image from "next/image";
import Edit from "../public/cog-outline.svg";
import { json } from "stream/consumers";
function EditProfileModal(props: any) {
  const [visible, setVisible] = React.useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    setVisible(props.visible);
  }, [props.visible]);

  useEffect(() => {
    setName(props.name);
    setBio(props.bio);
    setUsername(props.username);
  }, [props.name]);

  const closeHandler = () => {
    props.setVisible(false);
  };

  const saveAndClose = async () => {
    const sendReq = async () => {
      await fetch("http://localhost:3001/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          name,
          username,
          bio,
          image: "null",
        }),
      });
    };

    await sendReq();

    props.setVisible(false);
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
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Bio"
            value={bio}
            onChange={(e) => {
              setBio(e.target.value);
            }}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Caw Handle"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto onClick={saveAndClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}

export default EditProfileModal;
