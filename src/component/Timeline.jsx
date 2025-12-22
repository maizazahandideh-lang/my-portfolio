function Timeline() {
    const skills = [
        { year: "2023", skill: "شروع یادگیری HTML و CSS و مبانی طراحی وب" },
        { year: "2024", skill: "یادگیری JavaScript و تمرکز بر UI" },
        { year: "2024", skill: "کارآموز طراحی سایت در فیدار استودیو (تهران)" },
        { year: "2025", skill: "تمرکز روی Tailwind CSS و پروژه‌های عملی فرانت‌اند" },
    ];


    return (
        <section id="timeline" className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                مسیر یادگیری من
      </h2>

            <div className="relative border-r-2 border-gray-600 w-full max-w-3xl pr-6">
                {skills.map((item, index) => (
                    <div key={index} className="relative mb-10 pr-12 text-right">
                        <span className="absolute right-0 top-1 timeline-point"></span>

                        <p className="text-gray-400 font-semibold">{item.year}</p>
                        <p className="text-gray-300">{item.skill}</p>
                    </div>



                ))}
            </div>
        </section>
    );
}

export default Timeline;
