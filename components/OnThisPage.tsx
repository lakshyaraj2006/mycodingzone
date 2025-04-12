"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface LinkType {
  id: string;
  text: string;
}

const OnThisPage = ({
  htmlContent,
  className,
}: {
  htmlContent: string;
  className: string;
}) => {
  const [links, setLinks] = useState<LinkType[]>([]);

  useEffect(() => {
    const temp = document.createElement("div");
    temp.innerHTML = htmlContent;

    const headings = temp.querySelectorAll("h2, h3");

    const generatedLinks: LinkType[] = [];

    headings.forEach((heading, index) => {
      const id = heading.id || `heading-${index}`;
      heading.id = id;
      generatedLinks.push({
        id: id,
        text: (heading as HTMLElement).textContent as string,
      });
    });

    setLinks(generatedLinks);
  }, [htmlContent]);

  return (
    <div className={cn("hidden md:block", className)}>
      <div>
        <h2>On this page</h2>
        <ul className="not-prose text-xs">
          {links &&
            links.map((link: LinkType) => {
              return (
                <li key={link.id} className="pt-1">
                  <a href={`#${link.id}`}>
                    {link.text.length > 50
                      ? link.text.slice(0, 50) + "..."
                      : link.text}
                  </a>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default OnThisPage;
