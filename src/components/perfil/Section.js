const Section = ({ title, id, children }) => (
    <section id={id} className="container mx-auto px-4 sm:px-8 lg:px-16 py-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{title}</h2>
        <div className="h-1 w-20 bg-gray-800 dark:bg-gray-100 rounded-full mx-auto my-2" />
      </div>
      {children}
    </section>
  );

  export default Section