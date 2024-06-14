function Home() {
  localStorage["msg"] = "hello"
  console.log(localStorage)
  // delete localStorage.msg
  // console.log(localStorage);

  return <p>Welcome to NC Marketplace</p>;
}

export default Home;
