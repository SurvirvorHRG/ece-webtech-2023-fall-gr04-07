import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Article = () => {
  const router = useRouter();
  const { articleId } = router.query;

  return (
    <div>
      <Header />
      <h1>Article {articleId}</h1>
      {/* Fetch and display content for the specific article based on articleId */}
      {/* Dummy data for demonstration */}
      <p>This is the content of Article {articleId}.</p>
      <Footer />
    </div>
  );
};

export default Article;
