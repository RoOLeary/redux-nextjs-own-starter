import { useDispatch, useSelector } from "react-redux";
// import ACTIONS
import { setData, setBallsData, setLoading } from "../store/actions/postsAction";
import { setAnother } from "../store/actions/anotherAction";
import { useEffect, useRef } from "react";

export default function Home() {
  const abortController = useRef();
  // DISPATCH
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postData.data);
  const b = useSelector((state) => state.postData.berls);
  const loading = useSelector((state) => state.postData.loading); 
  const another = useSelector((state) => state.testRed.another); 

  const fetchPosts = async () => {    
    // add abort controller to provide means to cancel the fetch request
    abortController.current = new AbortController();
    
    console.log(abortController)

    try {
        const signal = abortController.current.signal;
        const response = await fetch(`https://ronan-oleary.com/wp-json/wp/v2/posts`, { signal })
        const posts = await response.json();
        dispatch(setData(posts));
        dispatch(setLoading(false));
    } catch (error) {
        console.error(error)
    }
}
  
  
  useEffect(() => {
    console.log(loading);
    fetchPosts();
  }, []);


  const cancelFetchData = () => {
      console.log(abortController.current)
      console.log('cancelFetchData called');
      abortController.current && abortController.current.abort();
     
  }

  useEffect(() => {
    const timeoutID = window.setTimeout(() => {
      console.log(another);
      dispatch(setAnother('Timeout'));
    }, 6000);

  return () => window.clearTimeout(timeoutID );
  },[])


  const update = (v) => {
      console.log(v)
      console.log(loading)
      dispatch(setBallsData(v));
    } 

  return (
    <>
      {/* <h3>{JSON.stringify(sample)}</h3> */}
      <input type="text" onChange={(e) => update(e.target.value)} placeholder={'Enter term'} value={b} />
      <button onClick={(e) => dispatch(setBallsData(e.target.value))}>Reset</button>
      <br />
      <p>{b && b }</p>
      <p>{loading ? 'GET READY' : 'GO TO WORK'}</p>
      <p>{posts.length > 0 ? <strong>Posts:</strong> : 'nada'}</p>
      {posts ? Object.entries(posts).map(p => {
          let post = p[1];
          return <p key={post.id}>{post.title.rendered}</p>
      }) : loading}
      {another && <h1>{`${another}`}</h1> }
      <button onClick={cancelFetchData} ref={abortController}>Cancel</button>
    </>
  );
}
