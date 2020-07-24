import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import Header from "../../Header/Header";
import * as S from "./protected.Layout.styled";

const ProtectedLayout = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [documentReady, setDocumentReady] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDocumentReady(true);
      if (localStorage.getItem("token")) {
        setAuth(true);
      }
    }
  }, []);

  useEffect(() => {
    if (documentReady && auth === false) {
      Router.push("/login");
    }
  }, [documentReady, auth]);

  return (
    <>
      {documentReady && auth ? (
        <div>
          <Header />
          <S.ContentWrapper>{children}</S.ContentWrapper>
        </div>
      ) : (
        <div>Validating...</div>
      )}
    </>
  );
};

ProtectedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedLayout;
