import React, { useState } from 'react';
import { Helmet } from "react-helmet";


function Abonnement() {
    const [selectedPlan, setSelectedPlan] = useState('');

    return (
        <>
        <Helmet>
            <title>Abonnement | Nutrition Antifragile</title>
            <meta name="description" content="Rejoignez notre communauté de membres antifragiles et reprenez le contrôle de votre alimentation avec nos formules d'abonnement." />
        </Helmet>
        <header header className="bg-linear-to-t from-white to-gray-200">
            <h1 className="text-center text-6xl font-SFBold text-marron pt-10">Choisissez votre abonnement</h1>
            <p className="text-center text-lg text-gray-600 mt-2">Accédez à tout le contenu premium</p>
        </header>
            <form className="pt-20">
            <div className='bg-white lex flex-col border-4 rounded-2xl shadow-lg shadow-black/50 p-10 mx-4 md:mx-auto md:max-w-2xl border-marron'>
            <h1 className='font-SFBold text-2xl text-center md:text-4xl text-marron'>Rejoignez plus de 1000 membres antifragiles</h1>
            <p className=" mt-4 text-center font-SF md:text-2xl text-xl">Qui reprennent le contrôle de leur alimentation, loin des dogmes et des manipulations de l'industrie</p>
             <h1 className="font-SFBold text-xl md:text-2xl my-8 text-center">Choisissez votre formule</h1>
            <div className='flex flex-col gap-10'>
               
                <div>
                    <input 
                    type="radio" 
                    id="launch" 
                    name="plan" 
                    value="launch" 
                    className="hidden"
                    onChange={(e) => setSelectedPlan(e.target.value)}
                />
                <label htmlFor="launch" className="block">
                     <div className={`border-2 border-solid rounded-2xl p-4 mt-4 shadow-lg relative cursor-pointer transition-all duration-300 ${
                         selectedPlan === 'launch' 
                         ? 'border-marron shadow-marron/30 bg-marron/5 scale-105 shadow-2xl' 
                         : 'border-gray-200 shadow-black/50 hover:border-marron/70 hover:scale-102'
                     }`}>
                        <div className="absolute bottom-32 md:left-10">
                        <span className="font-SFBold text-white border-2 rounded-2xl py-1 px-4 bg-red-400 animate-pulse" >OFFRE DU MOMENT</span>
                    </div>
                    <h1 className="font-SFBold text-2xl">Abonnement annuel</h1>
                    <h2 className="font-SFBold text-2xl text-marron my-2">60€<span className='text-xl font-SF text-gray-500'>/an</span></h2>
                    <span className="font-SF md:text-lg text-marron border-2 rounded-2xl py-1 px-2">-40% pour les 100 premiers abonnés</span>
                </div>
                </label>
            </div>
            
            <div>
                 <input 
                    type="radio" 
                    id="monthly" 
                    name="plan" 
                    value="monthly" 
                    className="hidden"
                    onChange={(e) => setSelectedPlan(e.target.value)}
                />
                <label htmlFor="monthly" className="block">
                     <div className={`border-2 border-solid rounded-2xl p-4 mt-4 shadow-lg relative cursor-pointer transition-all duration-300 ${
                         selectedPlan === 'monthly' 
                         ? 'border-marron shadow-marron/30 bg-marron/5 scale-105 shadow-2xl' 
                         : 'border-gray-200 shadow-black/50 hover:border-marron/70 hover:scale-102'
                     }`}>
                    <h1 className="font-SFBold text-2xl">Abonnement mensuel</h1>
                    <h2 className="font-SFBold text-2xl text-marron my-2">10€<span className='text-xl font-SF text-gray-500'>/mois</span></h2>
                    <span className="font-SF md:text-lg text-marron border-2 rounded-2xl py-1 px-2">Flexibilité maximale</span>
                </div>
                </label>
            </div>      
            </div>
            <div className='mt-10 border-2 border-marron rounded-2xl p-4 shadow-lg shadow-black/50'>
            <h1 className='font-SFBold text-center  text-2xl md:text-4xl mb-4'>Ce que vous obtenez</h1>
            <ul className='pl-6 text-lg md:text-xl font-SF mr-4'>
                <li className='mb-6'>
                    <strong className='text-marron font-SFBold'>✓ 4 articles exclusifs par mois</strong>
                    <br/>Une analyse independante, sourcee et sans filtre.
                </li>
                <li className='mb-6'>
                    <strong className='text-marron font-SFBold'>✓ Communauté privée</strong>
                    <br/>Un cercle de lecteurs qui veulent reprendre le contrôle de leur santé.
                </li>
                <li className='mb-6'>
                    <strong className='text-marron font-SFBold'>✓ Accès illimité</strong>
                    <br/>Tous les contenus passés et à venir, à vie tant que vous êtes membre.
                </li>
            </ul>
        </div>
        <button className="mt-8 block mx-auto text-lg font-SFBold rounded-full text-white px-6 py-4 bg-gradient-to-tr from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-black transition-colors duration-300 md:text-xl" type="submit">COMMENCER MON ABONNEMENT</button>
        <p className='mt-10 font-SF md:text-xl text-center'> ✅ Paiement sécurisé • ✅ Accès immédiat • ✅ Résiliation à tout moment</p>

        </div>
        
        </form>
    
        
        
        
        
        
        
        </>
    );

}

export default Abonnement;