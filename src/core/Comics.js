// import React, { useState, useEffect } from 'react';
// import Layout from './Layout';
// import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
// import Box from '@material-ui/core/Box';
// import Button from '@material-ui/core/Button';
// import Card from './Card';
// import { getCategories, getFilteredProducts1 } from './apiCore';
// import Checkbox from './Checkbox';
// import RadioBox from './RadioBox';
// import { makeStyles } from '@material-ui/core/styles';

// import Search from './Search';
// import { prices } from './fixedPrices';
// import Copyright from './Copyright';

// const Shop = () => {
//   const [myFilters, setMyFilters] = useState({
//     filters: { category: [], price: [] },
//   });

//   const [categories, setCategories] = useState([]);
//   const [error, setError] = useState(false);
//   const [limit, setLimit] = useState(5000);
//   const [skip, setSkip] = useState(0);
//   const [size, setSize] = useState(0);
//   const [filteredResults, setFilteredResults] = useState([]);

//   const init = () => {
//     getCategories().then((data) => {
     
//       if (data.error) {
//         setError(data.error);
//       } else {
//         setCategories(data); 
        
//       }console.log(data);
//     });
//   };

//   const loadFilteredResults = (filters) => {
//     console.log(filters);
//     getFilteredProducts1(skip, limit, filters).then((data) => {
//       if (data.error) {
//         setError(data.error);
//       } else {
//         setFilteredResults(data.data);
//         setSize(data.size);
//         setSkip(0);
//       }
//       console.log(data)
//     });
//   };

//   // const loadMore = () => {
//   //   let toSkip = skip + limit;
//   //   // console.log(newFilters);
//   //   getFilteredProducts(toSkip, limit, myFilters.filters).then((data) => {
//   //     if (data.error) {
//   //       setError(data.error);
//   //     } else {
//   //       setFilteredResults([...filteredResults, ...data.data]);
//   //       setSize(data.size);
//   //       setSkip(toSkip);
//   //     }
//   //   });
//   // };

//   // const useStyles = makeStyles((theme) => ({
//   //   btn: {
//   //     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//   //     borderRadius: 3,
//   //     border: 0,
//   //     color: 'white',
//   //     height: 48,
//   //     padding: '0 20px',
//   //     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//   //   },
//   // }));

 
 

//   useEffect(() => {
//     init();
    
//     loadFilteredResults(skip, limit, myFilters.filters);
//   }, []);

//   const handleFilters = (filters, filterBy) => {
//     console.log("SHOP", filters, filterBy);
//     const newFilters = { ...myFilters };
//     newFilters.filters[filterBy] = filters;

//     if (filterBy === 'price') {
//       let priceValues = handlePrice(filters);
//       newFilters.filters[filterBy] = priceValues;
//     }
//     loadFilteredResults(myFilters.filters);
//     setMyFilters(newFilters);
//   };

//   const handlePrice = (value) => {
//     const data = prices;
//     let array = [];

//     for (let key in data) {
//       if (data[key]._id === parseInt(value)) {
//         array = data[key].array;
//       }
//     }
//     return array;
//   };

//   return (
//     <Layout
//       title="Comics "
//       description="Search and find collectibles"
//       className="container-fluid"
//     >
//       <div id="nav-main">
//         <ul className="group">
//           <li className="main-li">
//             <a className="main-a" href="/comics">
//               Comics
//             </a>
//           </li>
//           <li className="main-li">
//             <a className="main-a" href="shop">
//               Toys
//             </a>
//           </li>
//           <li className="main-li">
//             <a className="main-a" href="/shop">
//               TCG
//             </a>
//           </li>
//           <li className="main-li">
//             <a className="main-a" href="/shop">
//               Statues
//             </a>
//           </li>
//           <li className="main-li">
//             <a className="main-a" href="/">
//               Sports Cards
//             </a>
//           </li>
//           <li className="main-li">
//             <a className="main-a" href="/graphicnovels">
//               Pedal Cars
//             </a>
//           </li>
//           <li className="main-li">
//             <a className="main-a" href="/comicsupplies">
//               Vintage Advertising
//             </a>
//           </li>
//         </ul>
//       </div>
//       <Search />
//       <div className="row">
//         <div className="col-md-3">
//           {/* <Checkbox
//             categories={categories}
//             handleFilters={(filters) => handleFilters(filters, "category")}
//           /> */}
//           {/* <h4>Filter by price range</h4>
//           <div>
//             <RadioBox
//               prices={prices}
//               handleFilters={(filters) => handleFilters(filters, 'price')}
//             />
//           </div> */}
//         </div>

//         <div className="col-md-9">
//           <h2 className="mb-2">Comics</h2>
//           <div className="row">
           
//             {filteredResults.map((product, i) => (
//               <div key={i} className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
//                 <Card product={product} />
//               </div>
//             ))}
//           </div>
//           <hr />
//         </div>
//       </div>
//       <Copyright />
//     </Layout>
//   );
// };

// export default Shop;

import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from './Card';
import { getCategories, getFilteredProducts1 } from './apiCore';
import Checkbox from './Checkbox';
import RadioBox from './RadioBox';
import { makeStyles } from '@material-ui/core/styles';

import Search from './Search';
import { prices } from './fixedPrices';
import Copyright from './Copyright';

const Shop = () => {
  const [myFilters, setMyFilters] = useState({
    filters: { category: [], price: [] },
  });

  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(5000);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(0);
  const [filteredResults, setFilteredResults] = useState([]);

  const init = () => {
    getCategories().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  const loadFilteredResults = (newFilters) => {
    // console.log(newFilters);
    getFilteredProducts1(skip, limit, newFilters).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setFilteredResults(data.data);
        setSize(data.size);
        setSkip(0);
      }
    });
  };

  const loadMore = () => {
    let toSkip = skip + limit;
    // console.log(newFilters);
    getFilteredProducts1(toSkip, limit, myFilters.filters).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setFilteredResults([...filteredResults, ...data.data]);
        setSize(data.size);
        setSkip(toSkip);
      }
    });
  };

  const useStyles = makeStyles((theme) => ({
    btn: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 20px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
  }));

  const classes = useStyles();

 

  useEffect(() => {
    init();
    loadFilteredResults(skip, limit, myFilters.filters);
  }, []);

  const handleFilters = (filters, filterBy) => {
    // console.log("SHOP", filters, filterBy);
    const newFilters = { ...myFilters };
    newFilters.filters[filterBy] = filters;

    if (filterBy === 'price') {
      let priceValues = handlePrice(filters);
      newFilters.filters[filterBy] = priceValues;
    }
    loadFilteredResults(myFilters.filters);
    setMyFilters(newFilters);
  };

  const handlePrice = (value) => {
    const data = prices;
    let array = [];

    for (let key in data) {
      if (data[key]._id === parseInt(value)) {
        array = data[key].array;
      }
    }
    return array;
  };

  return (
    <Layout
      title="Shop "
      description="Search and find collectibles"
      className="container-fluid"
    >
      <div id="nav-main">
        <ul className="group">
          <li className="main-li">
            <a className="main-a" href="/comics">
              Comics
            </a>
          </li>
          <li className="main-li">
            <a className="main-a" href="/toys">
              Toys
            </a>
          </li>
          <li className="main-li">
            <a className="main-a" href="/tcg">
              TCG
            </a>
          </li>
          <li className="main-li">
            <a className="main-a" href="/statues">
              Statues
            </a>
          </li>
          <li className="main-li">
            <a className="main-a" href="/sportscards">
              Sports Cards
            </a>
          </li>
          <li className="main-li">
            <a className="main-a" href="/pedalcars">
              Pedal Cars
            </a>
          </li>
          <li className="main-li">
            <a className="main-a" href="/vintagead">
              Vintage Advertising
            </a>
          </li>
        </ul>
      </div>
      <Search />
      <div className="row">
         <div className="col-md-3">
         

          {/* <h4>Filter by price range</h4>
          <div>
            <RadioBox
              prices={prices}
              handleFilters={(filters) => handleFilters(filters, 'price')}
            />
          </div> */}
        </div>

        <div className="col-md-9">
          <h2 className="mb-2">Comics</h2>
          <div className="row">
            {filteredResults.map((product, i) => (
              <div key={i} className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                <Card product={product} />
              </div>
            ))}
          </div>
          <hr />
        </div>
      </div>
      <Copyright />
    </Layout>
  );
};

export default Shop;