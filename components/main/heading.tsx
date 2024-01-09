
interface HeadingProps {
    title: string;
}

export const Heading: React.FC<HeadingProps> = ({
    title,
}) => {
  return (
    <div className="h-16 flex items-center justify-start">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
    </div>
  )  
};