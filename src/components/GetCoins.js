import React, { Component } from 'react';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';
import './styles.css';
import { Table, Button, Row } from 'reactstrap';
import {fetchCoinsAction} from '../actions/fetchCoinsAction';
import Loader from 'react-loader-spinner';


class GetCoins extends Component {
  constructor () {
    super();
    this.state = {
      coins: [],
      limit: 20
    }
  }

  componentDidMount() {
    const { fetchCoinsAction: fetchCoinData} = this.props;
    setInterval(async () => {
      await fetchCoinData();
    }, 3000);
  }


  render () {
    console.log(this.props)
    const { coins, isLoading } = this.props;
    const { data } = coins;
    const onLoadMore = () => {
      this.setState({
          limit: this.state.limit + 20
      });
    };

    return (
      <div className='container'>
        <div className='row mt-5 '>
          <div className='col-lg-12 col-sm-12 mt-4  '>
            <h3 className='title-section'>
              Top 100 Cryptocurrencies by Market Capitalization
            </h3>
          </div>
          <div className='col-lg-12 col-sm-12 mt-5'>
          { isLoading ? 
              <Row style={{justifyContent: 'center'}}><Loader
              type="ThreeDots"
              color="#212529"
              height={40}
              width={40}
              /></Row> :
              <>
            <Table hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th></th>
                  <th>Name</th>
                  <th>Market Cap</th>
                  <th>Price</th>
                  <th style={{textAlign: 'right'}}>Volume (24h)</th>
                  <th style={{textAlign: 'right'}}>Circulating Supply</th>
                  <th>Change (24h)</th>
                </tr>
              </thead>
              <tbody>
                {data && data.slice(0,this.state.limit).map((coin, index) => {
                  return (
                    <tr key={index}>
                    <td>{coin.rank}</td>
                    <td>{coin.symbol}</td>
                    <td >{coin.name}</td>
                    <td>
                    <NumberFormat
                    value={coin.marketCapUsd}
                    decimalScale={0}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$ '} />
                    </td>
                    <td>
                    <NumberFormat
                    value={coin.priceUsd}
                    decimalScale={2}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$ '} />
                    </td>
                    <td style={{textAlign: 'right'}}>
                    <NumberFormat
                    value={coin.volumeUsd24Hr}
                    decimalScale={0}
                    displayType={'text'}
                    thousandSeparator={true}
                    suffix={`${' '} ${coin.symbol}`}/>
                    </td>
                    <td style={{textAlign: 'right'}}>
                    <NumberFormat
                    value={coin.supply}
                    decimalScale={0}
                    displayType={'text'}
                    thousandSeparator={true}
                    suffix={`${' '} ${coin.symbol}`} />
                    </td>
                    <td>
                    <NumberFormat
                    value={coin.changePercent24Hr}
                    decimalScale={3}
                    displayType={'text'}
                    thousandSeparator={true}
                    suffix={ " %"} />
                    </td>
                  </tr>
                  )
                })
                }
              </tbody>
            </Table>
            <Row style={{ justifyContent: 'center', marginBottom: '25px'}}>
              <Button onClick={onLoadMore} outline color="secondary">Load More...</Button>{' '}
              </Row>
              </>
              }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  coins: state.fetchCoinsReducer.coins,
  isLoading: state.fetchCoinsReducer.isLoading,
});

export default connect(mapStateToProps, {
  fetchCoinsAction
})(GetCoins);