import React from "react";

const PopUpMessage = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
            <div className="bg-white p-4 rounded shadow-lg flex flex-col items-center">
                <p className="text-lg font-bold">¡Página Actualizada!</p>
                <p className="text-center">Revisa nuestra nueva vista en<br/>
                    la parte superior derecha</p>
                <div className="flex justify-center mt-3">
                    <button
                        onClick={onClose}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PopUpMessage;