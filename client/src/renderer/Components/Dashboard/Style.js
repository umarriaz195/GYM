import { makeStyles } from '@mui/styles';

 const useStyles = makeStyles((theme) => ({
  dashboard: {
    height: '1500px',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    width: '100%',
  },
  content: {
    width: '100%',
    padding: '16px',
    boxShadow: 'none',
  },
  cardContainer: {
    width: '100%',
    height: '30%',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '16px',
    marginTop: '100px',
  },
  card: {
    width: '23%',
    height: '170px',
    borderRadius: '8px',
  },
  headingContainer: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '8px',
  },
  heading: {
    color: '#000',
    fontWeight: 'bold',
    color: 'gray',
    marginBottom: '30px',
    fontSize: '14px',
  },
  secondHeading: {
    color: '#000',
    fontWeight: 'bold',
    color: 'gray',
    marginBottom: '30px',
    fontSize: '14px',
    width: '80px',
  },
  fourthHeading: {
    color: '#000',
    fontWeight: 'bold',
    color: 'gray',
    marginBottom: '30px',
    fontSize: '14px',
  },
  budgetText: {
    color: 'black',
    fontSize: '35px',
    fontWeight: 'bold',
    width: '20px',
    marginTop: '-25px',
  },
  arrowContainer: {
    display: 'flex',
    alignItems: 'center',
    color:  'green',
  },
  sinceText: {
    color: '#000',
    marginLeft: '20px',
    width: '150px',
  },

  // FIRST CARD ICON
  coinIconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: '85px',
  },
  coinIcon: {
    color: '#fff',
    fontSize: '48px',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    backgroundColor: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '10px'
  },

  // SECOND CARD ICON
  contactIconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: '70px',
    marginTop: '-',
  },
  contactIcon: {
    color: '#fff',
    fontSize: '48px',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    backgroundColor: 'green',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // THIRD CARD ICON

  taskProgressIconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: '100px',
  },
  taskProgressIcon: {
    color: '#fff',
    fontSize: '48px',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    backgroundColor: 'orange',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // FOURTH CARD ICON

  profitCoinIconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: '110px',
  },
  profitCoinIcon: {
    color: '#fff',
    fontSize: '48px',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    backgroundColor: 'blue',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

   // GRAPH CONTENT

  graphContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '500px',
    width: '100%',
    marginTop: '-180px',
    backgroundColor: '#f5f5f5',
    justifyContent: 'space-between',
  },


   // FIRST GRAPH

  graphSection1: {
    flex: '70%',
    background: '#fafafa',
    paddingRight: '5px'
  },

   // SECOND GRAPH

  graphSection2: {
    flex: '30%',
  },
 
}));

export default useStyles;
