import { FormEventHandler, MouseEventHandler } from "react";

function ActionButton({
  text,
  eventHandler,
  cyId,
}: {
  text: string;
  eventHandler: FormEventHandler | MouseEventHandler | undefined;
  cyId: string | undefined;
}) {
  return (
    <button
      className=" bg-lime-700 text-nowrap px-5 m-2 rounded-full text-amber-100 shadow-block-action-button ease-out hover:-translate-y-px hover:translate-x-px hover:shadow-button-hover transition-all"
      onClick={eventHandler}
      data-cy={cyId}
    >
      {text}
    </button>
  );
}

export default ActionButton;
