"use client";
import { useState } from "react";
import { Modal } from "antd";

type CustomModalProps = {
  trigger: React.ReactNode;
  children: React.ReactNode;
  width?: number;
};

export default function CustomModal({
  trigger,
  children,
  width = 700,
}: CustomModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="inline-block cursor-pointer"
      >
        {trigger}
      </div>

      <Modal
        footer={false}
        width={width}
        open={open}
        onCancel={() => setOpen(false)}
      >
        {children}
      </Modal>
    </>
  );
}
