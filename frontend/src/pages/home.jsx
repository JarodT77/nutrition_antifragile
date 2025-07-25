import React from 'react';
import { useEffect, useState } from 'react';
import livre from '../assets/images/livre.png';
import alionka from '../assets/images/Alionka.png';
import{ Helmet } from "react-helmet";
import { useNavigate } from 'react-router-dom';

function Home() {
    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);
    const navigate = useNavigate();
    const handleLoginClick = () => {  
        navigate('/connexion');
    };
    const handleSubscribeClick = () => { 
        navigate('/abonnement');
    };
    const handleBookClick = () => {
        navigate('/livre');
    };
    return (
        <>
        <Helmet>
            <title>Accueil | Nutrition Antifragile</title>
            <meta name="description" content="Bienvenue sur Nutrition Antifragile : découvrez une nouvelle approche de la santé durable. Rejoignez notre communauté et accédez à des ressources exclusives pour renforcer votre corps et votre esprit." />
        </Helmet>
        <header className="px-4 bg-linear-to-t from-white to-gray-200">
            <div className={`text-center transition-transform duration-1500 ease-out ${visible ? 'translate-y-0' : 'translate-y-50'}`}>
                <h2 className="font-SF text-gray-600">ALIONKA HOUL - REDACTRICE SCIENTIFIQUE INDEPENDANTE SPECIALISE EN NUTRITION</h2>
                
            
                <h1 className={` text-center text-5xl font-SFBold transition-transform duration-1500 ease-out md:text-8xl ${visible ? 'translate-y-0' : 'translate-y-10'}`}>NUTRITION<br/>ANTIFRAGILE</h1>
                <p className="text-center text-gray-600 text-xl font-SF md:text-2xl">Reprenez le pouvoir sur votre assiette dans un monde qui vous empoisonne</p>
            <p className="text-xl font-SFBold  text-center mt-8 shadow-lg border-marron border-l-4 rounded-l-xl p-10 mx-auto md:text-2xl max-w-4xl">Vos grands-parents n'avaient pas besoin de nutritionniste pour etre en forme. Vous, vous passez 10 minutes a decrypter l'etiquette d'un yaourt.</p>
            <button onClick ={handleBookClick}className="mt-8 block mx-auto text-lg font-SFBold rounded-full text-white px-6 py-4 bg-gradient-to-tr from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-black transition-colors duration-300 md:text-xl">DECOUVRIR LE LIVRE</button>
            </div>
                

        </header>
        <section className="mt-20">
            <div className='flex flex-col md:flex-row gap-20 justify-center text-center'>
                <div>
                    <img src = {livre} alt="Livre Nutrition Antifragile" className=" w-70 h-auto shadow-xl/50 mx-auto" />
                </div>
                <div className='max-w-xl'>
                    <h1 className='font-SFBold text-marron text-2xl md:text-4xl'>La pilule rouge de l'alimentation</h1>
                    <h2 className="mt-4 font-SF text-lg md:text-2xl">Le seul livre qui dévoile comment l’industrie alimentaire a reprogrammé votre rapport à la nourriture, pour faire de vous un consommateur dépendant.</h2>
                    <p className="mt-4 font-SF text-lg mb-2 md:text-xl">Vous decouvrirez:</p>
                    <div className="flex flex-col justify-center gap-2 mx-4 md:mx-auto">
                    <div className="border-2 border-solid border-marron rounded-2xl flex-1 shadow-lg shadow-black/50 ">
                        <p className="font-SFBold p-4 text-lg  justify-center md:text-xl">Pourquoi les aliments "healthy" vous maintiennent faible</p>
                    </div>
                    <div className="border-2 border-solid border-marron rounded-2xl flex-1 shadow-lg shadow-black/50">
                        <p className="font-SFBold p-4 text-lg md:text-xl">Les pièges mentaux intégrés dès l’enfance</p>
                    </div>
                    <div className="border-2 border-solid border-marron rounded-2xl flex-1 shadow-lg shadow-black/50">
                        <p className="font-SFBold p-4 text-lg md:text-xl">Retrouver votre instinct le plus primaire</p>
                    </div>
                </div>
            </div>
        </div>
        <h2 className='mt-8 text-center font-SFBold text-xl text-marron md:text-2xl'>De chasseur-cueilleur a victime de l'industrie: il est temps de reprendre le controle.</h2>
        <button className="mt-8 block mx-auto text-lg font-SFBold rounded-full text-white px-6 py-4 bg-gradient-to-tr from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-black transition-colors duration-300 md:text-xl">ACHETER LE LIVRE</button>
        </section>
        <section className ="mt-20">
            <h1 className='text-center font-SFBold text-4xl md:text-8xl'>L'AUTEURE</h1>
        
            <div className='flex flex-col mx-auto justify-center md:flex-row'>
                <div className="text-center mt-8 mx-4 md:mt-10">
                <img src= {alionka} alt="Alionka Houl" className="mx-auto mt-4 w-60 h-auto shadow-xl/50 rounded-2xl"/>
                <h2 className="font-SFBold mt-4 text-marron text-xl md:text-2xl">Alionka</h2>
                <p className="p-4 font-SF text-lg md:text-xl border-l-4 border-marron rounded-xl shadow-lg">Auteure<br/>redactrice scientifique specialisée en nutrition</p>
                </div>
                <div className='max-w-2xl mx-4 mt-8'>
                    <p className="text-center font-SFBoltItalic text-xl mt-4 mx-4 md:text-2xl border-b-2 border-marron">"Entre recherches scientifiques et voyages au cœur des traditions alimentaires ancestrales, je vous transmets l'essence véritable de la nutrition."</p>
                <p className="text-center mt-6 mx-4 font-SF text-lg md:text-xl">Diplômé d'un master en nutrition sportive, mon expérience en R&D agroalimentaire m'a ouvert les yeux sur les rouages de l'industrie. Mais c'est à travers mes recherches constantes et mes voyages dans les campagnes reculées d'Asie que j'ai découvert la véritable nutrition.</p>
                <p className="text-center mt-6 mx-4 font-SF text-lg bg-gradient-to-tr from-yellow-700 to-marron text-white rounded-2xl p-4 md:text-xl">Au fin fond des campagnes cambodgiennes, j'ai compris que l'alimentation véritable est offerte par la terre, cultivée avec amour et cuisinée avec gratitude. Une prise de conscience qui a transformé ma vision de la nutrition.</p>
                <p className="text-center mt-6 mx-4 font-SF text-lg md:text-xl">Aujourd'hui, animée par une soif profonde de transmettre cette sagesse nutritionnelle, je continue d'apprendre, de chercher et de dévoiler les vices de l'industrie agroalimentaire pour vous reconnecter à une nutrition qui honore votre biologie.</p>
                <p className="text-center mt-6 mx-4 font-SFBold text-lg rounded-2xl p-4 border-2 border-marron md:text-xl">À travers mes analyses et mes découvertes, je vous guide vers une alimentation qui nourrit le corps et l’esprit.</p>
                <button className=" mt-8 block mx-auto md:text-xl font-SFBold rounded-full text-white px-4 py-4 bg-gradient-to-tr from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-black transition-colors duration-300" onClick={handleLoginClick}>REJOIGNEZ LA COMMUNAUTE ANTIFRAGILE</button>
            </div>
                
                
            </div>
            
        </section>
        <section className="mt-20">
            <h1 className="text-center mt-10 font-SFBold text-4xl md:text-8xl">DEVENIR MEMBRE</h1>
            <p className='text-center font-SFBold md:text-2xl text-xl text-marron mt-4'>La vérité sur ton assiette</p>
            <p className="text-center  font-SFBold md:text-lg text-marron border-2 rounded-2xl mx-4  md:max-w-100 md:block md:mx-auto">DEJA + DE 1000 MEMBRES ANTIFRAGILES</p>
            <h2 className="text-center font-SFBold
            text-marron mt-8 text-lg md:text-xl">0 FILTRE . 0 DOGME. 0 BULLSHIT</h2>
            <div className='mt-10 bg-gradient-to-tr from-yellow-700 to-marron py-10 '>
                    <h1 className="text-center font-SFBold text-2xl text-yellow-300 md:text-5xl">CE QUE TU VAS RECEVOIR</h1>
                    <h2 className="text-center font-SFBold text-white text-lg mt-4 mx-4 md:text-xl">Chaque mardi à 8h dans ta boîte mail, un article pour</h2>
                    <ul className="list-disc pl-10 mx-4 md:block md:mx-auto max-w-4xl mt-8 border-4 md:px-10 md:py-10 rounded-2xl border-marron">
                        <li className="font-SFBold text-xl md:text-2xl text-white mb-8 px-5 pt-10 ">Se libérer des dogmes nutritionnels</li>
                        <li className="font-SFBold text-xl md:text-2xl text-white mb-8 px-5">Comprendre la matrice agro-industrielle, point par point</li>
                        <li className="font-SFBold text-xl md:text-2xl text-white mb-8 px-5">Nourrir son corps et son esprit pour maximiser sa santé sur le long terme</li>
                    </ul>
            </div>
            <button onClick= {handleSubscribeClick} className=" mt-10 block mx-auto  md:text-xl font-SFBold rounded-full text-white px-4 py-4 bg-gradient-to-tr from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-black transition-colors duration-300 md:px-6">DEVENIR MEMBRE ANTIFRAGILE</button>

        </section>
       
        </>
    );
}
export default Home;