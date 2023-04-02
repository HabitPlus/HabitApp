import * as React from "react";
import { useState } from "react";
import newContentService from "../../services/newContentService";
import Header from "../../components/header/Header";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

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
    <Header />
     <section className="flex flex-col justify-center items-center rounded-t-lg scale-90 md:scale-100">
        <SectionTitle text="Subir/editar contenido" />
        
        <div className="mx-14 flex justify-center max-w-7xl">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-light shadow-md rounded-b-lg px-8 pt-6 pb-8 mb-4 md:mt-0 w-80"
      >
        <div className="mb-4">
          <label htmlFor="section"  className="block font-bold text-gray-700 text-sm font-sans mb-1">
            Sección
          </label>
          <input
            required
            type="text"
            id="section"
            value={section}
            onChange={handleSectionChange}
            className="bg-yellow-light border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-double focus:shadow-outline"
          />
        </div>
        <div className="my-4">
          <label htmlFor="title" className="block font-bold text-gray-700 text-sm font-sans mb-1">
            Título
          </label>
          <input
            required
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="bg-yellow-light border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-double focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="paragraph" className="block font-bold text-gray-700 text-sm font-sans mb-1">
            Descripción
          </label>
          <textarea
            id="paragraph"
            value={paragraph}
            onChange={handleParagraphChange}
            className="bg-yellow-light border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-double focus:shadow-outline"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-orange hover:bg-red text-white py-2 px-20 w-80 rounded"
          >
            Send
          </button>
        </div>
      </form>
      </div>
      </section>
      </>
  );
};

export default ContentForm;
