import clsx from "clsx";

interface PopupMessageProps {
  iconSrc: string;
  title: string;
  text: string;
  show: boolean;
}

export default function PopupMessage({
  iconSrc,
  title,
  text,
  show,
}: PopupMessageProps) {
  return (
    <div
      className={clsx(
        "bg-grey-900 fixed z-10 top-6 left-1/2 -translate-x-1/2 rounded-xl transition-opacity duration-300 flex p-6 min-w-[327px] max-w-[450px] flex-col gap-2",
        { "opacity-100": show === true, "opacity-0": show === false }
      )}
    >
      <div className="flex items-center gap-2">
        <img src={iconSrc} alt={`${title} icon`} />
        <h2 className="font-karla font-bold text-lg leading-[150%] text-white">
          {title}
        </h2>
      </div>
      <p className="font-karla text-[16px] leading-[150%] text-green-200">
        {text}
      </p>
    </div>
  );
}
