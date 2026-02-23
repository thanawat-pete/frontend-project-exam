import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export const FeatureCard = ({ icon, title, description, borderColor }) => {
    return (
        <div className={`card bg-base-100 shadow-sm border-2 ${borderColor} rounded-xl p-6 text-center hover:shadow-md transition-shadow`}>
            <div className="flex justify-center mb-4">
                {icon}
            </div>
            <h3 className="font-bold text-lg mb-2 text-base-content">{title}</h3>
            <p className="text-sm text-base-content/70 leading-relaxed">{description}</p>
        </div>
    );
};

export const PlanCard = ({ title, price, period, features, buttonText, isPremium, badgeClass }) => {
    return (
        <div className={`card bg-base-100 shadow-sm border rounded-xl overflow-hidden relative pb-6 ${isPremium ? 'border-primary/50 shadow-primary/10 shadow-lg' : 'border-base-300 shadow-sm'}`}>
            <div className="p-6 pb-2 text-center">
                <div className={`inline-block px-5 py-1.5 rounded-full text-sm font-bold mb-4 ${badgeClass}`}>
                    {title}
                </div>
                <div className="flex justify-center items-end gap-1 mb-2">
                    <span className="text-xl font-bold text-base-content/80 mb-1">฿</span>
                    <span className="text-[2.5rem] font-extrabold text-base-content leading-none">{price}</span>
                    <span className="text-xs font-medium text-base-content/60 mb-2 ml-1 whitespace-nowrap">{period}</span>
                </div>
            </div>

            <div className="p-6 pt-4 flex flex-col h-full">
                <ul className="flex flex-col gap-3 mb-8 text-[13px] text-left">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                            {feature.included ? (
                                <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                            ) : (
                                <XCircle className="h-4 w-4 text-error shrink-0 mt-0.5" />
                            )}
                            <span className={`${feature.included ? 'text-base-content' : 'text-base-content/40'} leading-tight`}>{feature.text}</span>
                        </li>
                    ))}
                </ul>

                {buttonText && (
                    <div className="mt-auto px-2">
                        <button className="btn btn-primary w-full rounded-lg text-white font-medium tracking-wide">
                            {buttonText}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};