function Hero() {
	return (
		<section className="min-h-screen animated-bg text-white flex flex-col items-center justify-center gap-6 px-6">

			<h1 className="text-primary text-4xl md:text-5xl font-bold text-center transform transition-transform duration-700 hover:scale-105">
				سلام، من سحر جهاندیده هستم 👋
             </h1>

			<p className="text-gray-400 text-lg text-center max-w-xl opacity-0 animate-fadeIn">
				توسعه‌دهنده فرانت‌اند با تمرکز بر طراحی رابط کاربری
				React • Tailwind CSS • UI-focused Frontend Developer
            </p>

			<a href="#about" className="btn-primary mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition transform hover:scale-105">
			 درباره من
            </a>

		</section>

	)
}

export default Hero
