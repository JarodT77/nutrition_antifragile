// src/pages/ArticleDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CommentSection  from "../components/CommentSection";
import { fetchArticleDetail } from "../utils/api";
import  "../styles/ckText.css";


function ArticleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const data = await fetchArticleDetail(id, token);
        setArticle(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [id]);



  // ✅ Gérer le clic du bouton d'abonnement (si présent)
  useEffect(() => {
    const handleSubscribeClick = () => {
      navigate("/abonnement");
    };

    const btn = document.getElementById("subscribe-block");
    if (btn) {
      btn.addEventListener("click", handleSubscribeClick);
    }

    // Nettoyage pour éviter les doublons si le composant se remonte
    return () => {
      if (btn) {
        btn.removeEventListener("click", handleSubscribeClick);
      }
    };
  }, [article, navigate]);

  if (loading) return <p className="text-center mt-10">Chargement...</p>;
  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;

  const token = localStorage.getItem("access_token");

// Décodage du token pour savoir si l'utilisateur est admin
  let isAdmin = false;
  if (token) {
    try {
      const payload = JSON.parse(atob(token.split('.')[1])); // Décode le token JWT
      isAdmin = payload.is_staff === true; // On récupère la valeur de is_staff dans le token
    } catch (error) {
      console.error("Erreur lors du décodage du token:", error);
    }
  }

  return (
    <>
    <header className=" text-center pt-10 bg-linear-to-t from-white to-gray-200">
       <h1 className=" text-3xl mx-4 md:text-5xl md:mx-auto md:max-w-4xl font-SFBold mb-4">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-6 font-SF">
        Publié le {new Date(article.published_at).toLocaleDateString("fr-FR")}
      </p>
    </header>
    <div className=" mx-4 md:mx-auto md:max-w-5xl px-4 py-8">
      <div className="overflow-hidden mx-auto md:max-w-5xl md:h-150">
        {article.image && (
        <img
          src={`${article.image}`}
          alt={article.title}
          className="w-full h-full object-cover object-center"
        />
      )}</div>
     
      
      <div className="article-content" dangerouslySetInnerHTML={{ __html: (article.excerpt) }} />
      
      <div className="article-content" dangerouslySetInnerHTML={{ __html: (article.content) }} />

    </div>
    <CommentSection token={token} isAdmin={isAdmin} />
    </>
  );
}

export default ArticleDetail;
