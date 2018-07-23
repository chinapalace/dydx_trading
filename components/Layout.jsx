import React from "react";
import { Container, Grid, Header, Segment, Divider } from "semantic-ui-react";
import Head from "next/head";

export default props => {
  const style = {
    h1: {
      marginTop: "3em"
    },
    h2: {
      margin: "4em 0em 2em"
    },
    h3: {
      marginTop: "2em",
      padding: "2em 0em"
    },
    last: {
      marginBottom: "300px"
    }
  };
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"
        />
      </Head>

      <div>
        <img
          style={{
            display: "inline-block",
            verticalAlign: "middle"
          }}
          src="../static/images/logo.png"
          alt=""
          width="132.6"
          height="66.3"
        />
        <span
          style={{
            verticalAlign: "middle",
            display: "inline-block",
            fontSize: "28px"
          }}
        >
          |  Trading
        </span>
      </div>
      <Divider
        style={{
          marginTop: 0
        }}
      />
      {props.children}
    </div>
  );
};
