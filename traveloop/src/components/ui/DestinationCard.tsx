import Image from "next/image";
import { motion } from "framer-motion";

interface DestinationCardProps {
  image: string;
  title: string;
  size?: "large" | "small";
  tags?: string[];
  price?: string;
}

export function DestinationCard({
  image,
  title,
  size = "small",
  tags,
  price,
}: DestinationCardProps) {
  const isLarge = size === "large";

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
      className={`relative rounded-2xl overflow-hidden group ${
        isLarge ? "h-[500px]" : "h-[238px]"
      }`}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
      
      {isLarge ? (
        <div className="absolute bottom-8 left-8 right-8 glass-panel rounded-xl p-6 flex justify-between items-end">
          <div>
            {tags && tags.length > 0 && (
              <div className="flex gap-2 mb-3">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-surface-container-low border border-surface-variant text-primary font-sans text-[10px] uppercase font-semibold tracking-widest px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <h3 className="font-heading text-2xl text-on-primary">{title}</h3>
          </div>
          {price && (
            <div className="text-right">
              <p className="font-sans text-base text-primary-fixed-dim">From</p>
              <p className="font-heading text-2xl text-on-primary">{price}</p>
            </div>
          )}
        </div>
      ) : (
        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="font-heading text-lg text-on-primary font-medium">{title}</h3>
        </div>
      )}
    </motion.div>
  );
}
