import { Input, Link, Spacer } from "@nextui-org/react";
import React from "react";
import styles from "../styles/sidebar.module.scss";
import { Card } from "@nextui-org/react";

function Sidebar() {
  return (
    <div className={styles.base}>
      <Input labelPlaceholder="Search" color="primary" bordered size="lg" />

      <Card bordered shadow={false} css={{ mw: "20rem" }}>
        <Card clickable bordered css={{ mw: "20rem" }}>
          <p>Protests at JNU</p>
          <Card.Footer>
            <Link>#jnuviolence</Link>
          </Card.Footer>
        </Card>
        <Spacer y={1} />

        <Card clickable bordered css={{ mw: "20rem" }}>
          <p>Covid19</p>
          <Card.Footer>
            <Link>#covid19</Link>
          </Card.Footer>
        </Card>
        <Spacer y={1} />

        <Card clickable bordered css={{ mw: "20rem" }}>
          <p>China Covid Crisis</p>
          <Card.Footer>
            <Link>#covidchina</Link>
          </Card.Footer>
        </Card>

        <Spacer y={1} />
      </Card>
      <div className={styles.footer}>
        <a href="#">About</a>
      </div>
    </div>
  );
}

export default Sidebar;
