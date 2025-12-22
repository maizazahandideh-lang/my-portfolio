import { useState } from "react";

function Contact() {
    const email = "maizazahandideh@gmail.com";
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section
            id="contact"
            className="min-h-screen bg-gray-800 text-white flex items-center justify-center px-6"
        >
            <div className="max-w-xl w-full text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                    ارتباط با من
        </h2>

                <p className="text-gray-300">
                    اگر دوست دارید با من در ارتباط باشید، می‌تونید از ایمیل زیر استفاده کنید:
        </p>

                <div className="bg-gray-700 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-indigo-400 font-mono">{email}</span>

                    <button
                        onClick={copyEmail}
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition"
                    >
                        {copied ? "کپی شد ✅" : "کپی ایمیل"}
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Contact;
