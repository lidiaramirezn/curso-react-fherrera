import { getData } from "../helpers/getData"

export const useFetchData = ( id ) => {
  const [quotes, setQuotes] = useState({});

  const getQuotes = async() => {
    const newQuotes = await getData( id );
    setQuotes(newQuotes);
  }

  useEffect(() => {
    getQuotes();
  }, [])
  

  return {
    quotes
  }
}