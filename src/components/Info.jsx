import React from "react";
import {
    VRA,
    MAT,
    ELE,
    TTF,
    ELP,
    FIS,
    AST,
    FIZ,
    IIC,
    OFG,
    OPR,
    FIL,
    DEF,
    FON,
    MEF,
} from "../utils/colors";

export const Info = () => {
    return (
        <div className="flex my-4 items-center mx-auto justify-center flex-col">
            <hr className="w-full my-4 border-gray-300" />
            <div className="flex items-center">
                <div className="w-80 text-justify sm:block hidden mr-16">
                    Puedes tachar tus ramos aprobados haciendo click en ellos. A medida que
                    vas aprobando ramos, se van liberando los que tienen prerrequisitos
                </div>
                <div className="w-80 ">
                    <img src="/course-info.png" />
                </div>
            </div>
            <hr className="w-full my-4 border-gray-300" />
            <div className="flex items-center mt-2">
                <div className="w-80 text-center sm:block hidden mr-16 font-bold">
                    ¿Qué significan los colores?
                </div>
            </div>
            <div className="w-50 left-2 mt-3 mr-3">
                <table className="table-auto w-90">
                    <tbody>
                    <tr>
                        <td className="w-50">
                            <span className={`w-4 h-4 mr-3 ${AST} rounded-full inline-block`}></span>
                            <span className={`w-4 h-4 mr-3 ${MAT} rounded-full inline-block`}></span>
                            <span className={`w-4 h-4 mr-3 ${FIZ} rounded-full inline-block`}></span>
                            <span className={`w-4 h-4 mr-3 ${IIC} rounded-full inline-block`}></span>
                        </td>
                        <td>Azules: Mínimos Disciplinarios</td>
                    </tr>
                    <tr>
                        <td className="w-50">
                            <span className={`w-4 h-4 mr-3 ${FIL} rounded-full inline-block`}></span>
                            <span className={`w-4 h-4 mr-3 ${TTF} rounded-full inline-block`}></span>
                            <span className={`w-4 h-4 mr-3 ${OFG} rounded-full inline-block`}></span>
                        </td>
                        <td>Amarillos: Ramos de Formación General (OFGs)</td>
                    </tr>
                    <tr>
                        <td className="w-50">
                            <span className={`w-4 h-4 mr-3 ${OPR} rounded-full inline-block`}></span>
                        </td>
                        <td>Naranja: Optativos de Profundización (OPRs)</td>
                    </tr>
                    <tr>
                        <td className="w-50">
                            <span className={`w-4 h-4 mr-3 ${VRA} rounded-full inline-block`}></span>
                        </td>
                        <td>Verde: Exámenes (VRA)</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
