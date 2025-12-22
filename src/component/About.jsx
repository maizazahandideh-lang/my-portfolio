function About() {
    return (

        <section id="about" className="min-h-screen bg-gray-800 text-white flex items-center justify-center px-6">
            <div className="max-w-5xl grid md:grid-cols-2 gap-12 items-center">

                {/* متن */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        درباره من
          </h2>

                    <p className="text-gray-300 leading-relaxed mb-6">
                        من سحر جهاندیده هستم، توسعه‌دهنده فرانت‌اند در سطح جونیور با علاقه‌مندی جدی به طراحی رابط‌های کاربری استاندارد و کاربرمحور.

                        تمرکز اصلی من روی پیاده‌سازی رابط‌های کاربری تمیز، واکنش‌گرا و قابل استفاده با React و Tailwind CSS است. در طول مسیر یادگیری، با فناوری‌هایی مانند HTML، CSS، JavaScript، Bootstrap و jQuery کار کرده‌ام و با مفاهیم پایه سئو و طراحی ریسپانسیو آشنایی دارم.

                        در حال حاضر به‌صورت مستمر در حال ارتقای مهارت‌های فنی خود از طریق دوره‌های آنلاین توسعه وب هستم و هدفم ورود حرفه‌ای به بازار کار فرانت‌اند و مشارکت در پروژه‌های واقعی و تیمی است.

          </p>

                    <p className="text-gray-400 leading-relaxed">
                        دانشجوی کارشناسی زبان روسی – دانشگاه تهران  
                        تسلط عالی به زبان روسی  
                        سطح خوب زبان انگلیسی

          </p>
                </div>

                {/* مهارت‌ها */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">مهارت‌ها</h3>

                    <div className="grid grid-cols-2 gap-4">
                        <Skill title="Bootstrap" />
                        <Skill title="JavaScript" />
                        <Skill title="Jquery" />
                        <Skill title="HTML & CSS" />
                        <Skill title="Basic SEO" />
                        <Skill title="Responsive Design" />

                    </div>
                </div>

            </div>
        </section>
    )
}

function Skill({ title }) {
    return (
        <div className="bg-gray-700 rounded-lg py-4 text-center hover:bg-gray-600 transition">
            {title}
        </div>
    )
}

export default About
