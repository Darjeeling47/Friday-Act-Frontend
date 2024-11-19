// import util
import { cn } from "@/utils/utils";

// Tag component
export default function Tag({
  text,
  color
}: {
  text: string,
  color?: string
}) {
  // return
  return (
    <div
      className={cn(
        "px-2 py-1 rounded-full text-footnote",
      )}
      style={{
        color: color ? `#${color}` : "#000",
        backgroundColor: color ? `#${color}20` : "#00000020",
      }}
    >
      {text}
    </div>
  );
};
