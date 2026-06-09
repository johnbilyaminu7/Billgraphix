import React from 'react'
import {useState, useEffect} from 'react'

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('graphics');
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);
  const itemsPerPage = 6;
  const graphicData = [
    {image: "20251023_153921.jpg", title: "Project 1", description: "A creative desing piece featuring high-contrast visuals, showcasing your ability to work with dark aesthetic and brand identity."},
    {image: "20251023_173113.jpg", title: "Project 2", description: "A dynamic, visually striking design utilizing layered effects and bold typography to emphasize a unique 'MADE TO STAND OUT' concept."},
    {image: "20251024_180701.jpg", title: "Project 3", description: "A professional services flyer that effectively communicates design capability, including logos, flyers, banners, certificates, and bussiness cards."},
    {image: "20251027_202804.jpg", title: "Project 4", description: "A dynamic sports-themed graphic that uses perspective to create a 'Beyond the frame' visual effects, highlighting an active lifestyle."},
    {image: "20251029_091933.jpg", title: "Project 5", description: "A clean,minimalist brand identity project centered around the concept of 'Revive' and personal renewal."},
    {image: "20251029_093307.jpg", title: "Project 6", description: "A professional t-shirt design featuring the bold, purposeful branding of the 'Revive' concept."},
    {image: "20251029_201146.jpg", title: "Project 7", description: "An evocative, artistic portrait design that utilizes natural scenery to create a contemplative and atmospheric visual."},
    {image: "20251031_224431.png", title: "Project 8", description: "A seasonal greeting flyer for the month of november, combining motivational messaging with a professional aesthetic."},
    {image: "20251105_130743.png", title: "Project 9", description: "A vibrant social media promotional grahic designed to drive engagement and followers to your instagram handle."},
    {image: "20251105_132913.png", title: "Project 10", description: "A personal brand professional profile card, highlighting your services as a graphic designer, brand designer, and tutor."},
    {image: "20251111_122055.png", title: "Project 11", description: "A product-focused apparel design that clearly displays 'Revive' brand logo on clothing."},
    {image: "20251111_152404.png", title: "Project 12", description: "A high quality back-print apparel design, emphasizing a 'designed with purpose' brand philosophy."},
    {image: "20251111_160419.png", title: "Project 13", description: " A clothing brand collection showcase featuring your 'Revive' logo across various apparel items."},
    {image: "20251130_201636.png", title: "Project 14", description: "a heart felt seasonal design for december, focused on reflection, and setting goals for the upcoming year."},
    {image: "20251130_210657.png", title: "Project 15", description: "A promotional 'Mega December' sales flyer for a fashion brand, clearly detailed discount and service information."},
    {image: "20251215_114858.png", title: "Project 16", description: "A professional service package flyer detailed 'Micro Office Essentials' training."},
    {image: "20251216_195013.png", title: "Project 17", description: " A promotional; graphic for a web design course, emphasizing the skill of building stunning, responsive websites."},
    {image: "20251225_235208.png", title: "Project 18", description: "An elegant, festive design created for the christmas season."},
    {image: "20251231_133208.png", title: "Project 19", description: "A modern 2026 'happy New Year' greeting design, centered on themes of growth and new beginnings."},
    {image: "20251231_180020.png", title: "Project 20", description: "A 'Gift and Glow' boutique showcasing flyer featuring a collage of products and gift items."},
    {image: "20260105_223848.png", title: "Project 21", description: "A service menu flyer for 'CEE4 Crochet' listing available items like earrings, scrunchies, and headband."},
    {image: "20260107_112855.png", title: "Project 22", description: "A clean, organized service list highligthing our expertise in logos, flyers, posters, banners, and more."},
    {image: "20260107_122430.png", title: "Project 23", description: "A call-to-action design encouraging clients to reach out for their next design project."},
    {image: "20260124_082941.png", title: "Project 24", description: "A recent detailed service package."},
    {image: "20260124_122140.png", title: "Project 25", description: " Valantine package promotional flyer for a boutique, detailing various service package and pricing for clients."},
    {image: "20260212_125026.png", title: "Project 26", description: "A former event invitation flyer for a TETFUND national research fund presentation regarding popular media and Gender-Based-Violence(GBV) in Borno."},
    {image: "20260524_210328.png", title: "Project 27", description: "A heartfelt 'Happy Children Day' graphic, designed to celebrate and honor children."},
    {image: "20260530_145135.png", title: "Project 28", description: "A 'Hello June' monthly greeting design, focusing on new beginnings."},
  ];
  const webData = [
    {image: "Screenshot_20260608_141240_Acode.jpg", title: "Project 1", description: "An interactive application desinged to test user knowledge through a series of engaging questions, featuring a clear START QUIZ interface. "},
    {image: "Screenshot_20260608_141408_Acode.jpg", title: "Project 2", description: "A financial tool that helps users monitor their spending and manage their budget with input fields for tracking specific costs."},
    {image: "Screenshot_20260608_141607_Acode.jpg", title: "Project 2", description: "A productive application that allows users to create, view and organize their daily taskd with a counter to track the number of items on their list."},
  ];
  const graphicprojects = graphicData.map((item, i) => ({
    id: i + 1,
    title: item.title,
    image: `/${item.image}`,
    description: item.description,
  }));
  const webprojects = webData.map((item, i) => ({
    id: 100 + i,
    title: item.title,
    image: `/${item.image}`,
    description: item.description,
  }));
  const activeData = activeCategory === 'graphics' ? graphicprojects : webprojects;
  const totalPages = Math.ceil(activeData.length / itemsPerPage);
  const lastIndex = (currentPage - 1) * itemsPerPage;
  const startIndex = lastIndex;
  const currentItems = activeData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className='min-h-screen py-16 px-6 bg-slate50 dark:bg-slate-900 transition-colors'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200'>My Projects</h2>
        <div className='flex justify-center gap-4 mb-8'>
          <button
            className={`px-4 py-2 rounded-md ${activeCategory === 'graphics' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 dark:bg-gray-600 dark:text-gray-300'}`}
            onClick={() => setActiveCategory('graphics')}
          >
            Graphics
          </button>
          <button
            className={`px-4 py-2 rounded-md ${activeCategory === 'web' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 dark:bg-gray-600 dark:text-gray-300'}`}
            onClick={() => setActiveCategory('web')}
          >
            Web
          </button>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {currentItems.map((project) => (
            <div key={project.id} className='bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden'>
              <img src={project.image} alt={project.title} className='w-full h-90 aspect-4/3 bg-slate-100 dark:bg-gray-900 object-contain' />
              <div className='p-4'>
                <h3 className='text-xl font-bold text-gray-800 dark:text-gray-200'>{project.title}</h3>
                <p className='text-gray-600 dark:text-gray-400 mt-2'>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-center items-center mt-8 gap-4'>
          <button disabled={currentPage === 1} onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} className={`px-4 py-2 rounded-md ${currentPage === 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white'}`}>
            Previous
          </button>
          <span className='text-gray-800 dark:text-gray-200'>
            Page {currentPage} of {totalPages}
          </span>
          <button disabled={currentPage === totalPages} onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} className={`px-4 py-2 rounded-md ${currentPage === totalPages ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white'}`}>
            Next
          </button>
        </div>
        <div className='text-center mt-8'>
          <p className='text-gray-600 dark:text-gray-400 mt-2'>Intresed in the technical details? you can explore the complete sources code for these projects and more on my GitHub profile</p>
        </div>
      </div>
    </section>
  )
}

export default Projects;
