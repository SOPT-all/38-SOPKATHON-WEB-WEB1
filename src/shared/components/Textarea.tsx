interface TextareaProps {
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
}

function Textarea({ value, onChange, maxLength = 50 }: TextareaProps) {
  return (
    <div className="relative h-[348px] w-full rounded-[8px] bg-[#F7F7FA]">
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        maxLength={maxLength}
        className="h-full w-full resize-none bg-transparent px-[28px] py-[28px] pb-[64px] text-[2rem] outline-none"
      />

      <span className="absolute right-[28px] bottom-[28px] text-[1.8rem] text-[#999999]">
        {value.length}/{maxLength}
      </span>
    </div>
  );
}

export default Textarea;
