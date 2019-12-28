import React, { useEffect, useRef } from "react";
import classNames from "../../util/classNames";
import "./drawer.css";
import Layout from "../Layout";
import IconClose from "../../icons/IconClose";
import { ButtonWithIcon } from "../Button";

function useOnClickOutside<T extends HTMLElement>(handleClick: AnyFunction) {
  const ref = useRef<T>(null);

  // TODO: fix the type
  function handleClickOutside(event: any) {
    if (ref.current && !ref.current.contains(event.target)) {
      handleClick(event);
    }
  }

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mouseup", handleClickOutside);
    };
  });

  return ref;
}

interface Props {
  isOpen: boolean;
  onClose: AnyFunction;
  title?: string;
  side?: "left" | "right";
}

const Drawer: React.FC<Props> = ({
  children,
  isOpen,
  onClose,
  title,
  side = "right"
}) => {
  const drawerRef = useOnClickOutside<HTMLDivElement>(onClose);

  return (
    <div
      className={classNames(
        { "drawer--background--open": isOpen },
        "drawer--background"
      )}
    >
      <Layout.Grid
        innerRef={drawerRef}
        className={classNames(
          { "drawer--open": isOpen, "drawer--left": side === "left" },
          "drawer"
        )}
      >
        <Layout.Header className="drawer--header">
          {title && <h2>{title}</h2>}
          <ButtonWithIcon Icon={IconClose} label="Cancel" onClick={onClose} />
        </Layout.Header>
        <Layout.Content className="drawer--content">{children}</Layout.Content>
      </Layout.Grid>
    </div>
  );
};

export default Drawer;
