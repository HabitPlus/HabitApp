import * as React from "react";
import { useState } from "react";
import newContentService from "../../services/newContentService";

/* type Props = {}; */

const ContentForm = () => {
  const [section, setSection] = useState<any>("");
  const [title, setTitle] = useState<any>("");
  const [paragraph, setParagraph] = useState<any>("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      console.log(section, title, paragraph);
      const contentEntered = await newContentService.postContent({
        section,
        title,
        paragraph,
      });
      console.log(contentEntered);
    } catch (error) {}

    setSection("");
    setTitle("");
    setParagraph("");
  };

  const handleSectionChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSection(event.currentTarget.value);
  };

  const handleTitleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };

  const handleParagraphChange = (
    event: React.FormEvent<HTMLTextAreaElement>
  ) => {
    setParagraph(event.currentTarget.value);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col font-sans mx-auto px-4 py-6 md:py-12 md:gap-4 md:max-w-md mb-36"
      >
        <div className="my-4">
          <label htmlFor="section" className="mb-2 font-bold text-gray-700">
            Sección
          </label>
          <input
            required
            type="text"
            id="section"
            value={section}
            onChange={handleSectionChange}
            className="w-full px-3 py-2 border border-red rounded-lg shadow-md bg-purple"
          />
        </div>
        <div className="my-4">
          <label htmlFor="title" className="mb-2 font-bold text-gray-700">
            Título
          </label>
          <input
            required
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="w-full px-3 py-2 border border-red rounded-lg shadow-md bg-purple"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="paragraph" className="mb-2 font-bold text-gray-700">
            Descripción
          </label>
          <textarea
            id="paragraph"
            value={paragraph}
            onChange={handleParagraphChange}
            className="w-full px-3 py-2 border border-red rounded-lg shadow-md bg-purple"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-12 py-4 bg-red hover:bg-orange rounded-md text-white"
          >
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default ContentForm;
