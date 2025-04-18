export default function About() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 px-4 pt-6">
            <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl w-full">
                <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
                    About the Application
                </h2>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    This application was developed to <strong>generate QR Codes from custom text</strong> entered by the user.
                    With a simple and intuitive interface, you can type any content, generate the corresponding QR Code, view it,
                    and even download the generated image.
                </p>
            </div>
        </div>
    );
}
