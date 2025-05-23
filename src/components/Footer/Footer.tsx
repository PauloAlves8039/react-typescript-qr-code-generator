export default function Footer() {
    return (
        <div className="bg-gray-100 text-center py-4 border-t border-gray-300 mt-auto sm:mt-8">
            <p className="text-sm sm:text-base text-gray-700">
                <span className="font-semibold text-blue-700">{new Date().getFullYear()} - Developed by:</span>{" "}
                <a
                    href="https://github.com/PauloAlves8039"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:underline"
                >
                    Paulo Alves
                </a>
            </p>
        </div>
    );
}
