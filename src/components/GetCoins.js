import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import NumberFormat from 'react-number-format';
import './styles.css';
import { Table, Button, Row, Modal, ModalBody, ModalFooter} from 'reactstrap';
import {fetchCoinsAction } from '../actions/fetchCoinsAction';
import { getLocatioData } from '../actions/getLocatioDataAction';
import {fetchCoinHistoryAction} from '../actions/fetchCoinHistoryAction';
import { getCoinIconUri } from '../libs/constants';
import Loader from 'react-loader-spinner';
import { AreaChart } from 'react-chartkick'
import 'chart.js'

class GetCoins extends Component {
  constructor () {
    super();
    this.state = {
      limit: 20,
      isOpen: false,
    }
  }

componentDidMount() {
  const { fetchCoinsAction } = this.props;
  setInterval(async () => {
    fetchCoinsAction();
  }, 3000);

  }

  toggle = async ({ id }) => {
    await this.props.fetchCoinHistoryAction(id);
    this.setState({isOpen: !this.state.isOpen})
  };

  composeChart = () => {
    const { coinHistory } = this.props;
    const chartData = [];
    coinHistory.map(each => {
      const date = new Date(each.date).toISOString().split('T')[0];
      const stringDate = date.toString();
      return chartData.push([ [stringDate], each.priceUsd ])
    }); 
    return chartData;
  }

  render () {
    const { coins, isLoading } = this.props;
    const { data } = coins;
    console.log(data)
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
              color="#13b2bc"
              height={40}
              width={40}
              /></Row> :
              <>
            <Table hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th style={{textAlign: 'right' }}>Market Cap</th>
                  <th style={{textAlign: 'right'}}>Price</th>
                  <th style={{textAlign: 'right'}}>Volume (24h)</th>
                  <th style={{textAlign: 'right'}}>Supply</th>
                  <th style={{textAlign: 'right'}}>Circulating Supply</th>
                  <th style={{textAlign: 'right'}}>Change (24h)</th>
                </tr>
              </thead>
              <tbody>
                {data && data.slice(0,this.state.limit).map((coin, index) => {
                  return (
                    <tr
                    key={index}
                    onClick={() => this.toggle(coin)}
                    >
                    <td>{coin.rank}</td>
                  <td>
                    <div style={{display: 'flex'}}>
                    <img style={{width: '30px', height: '30px', marginRight: '10px'}} alt='icon' src={getCoinIconUri(coin.name)} />
                    <div>
                      {coin.name}
                      <p style={{color: '#b5b8bb', fontSize: '12px', marginBottom: '10px'}}>{coin.symbol}</p></div>
                      </div></td>
                    <td style={{textAlign: 'right'}}>
                    <NumberFormat
                    value={coin.marketCapUsd}
                    decimalScale={0}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$ '} />
                    </td>
                    <td style={{textAlign: 'right'}}>
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
                    <td className={coin.changePercent24Hr > 0 ? 'change24-up' : 'change24-down'} style={{textAlign: 'right'}}>
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
              <Button onClick={onLoadMore} outline style={{ color: '#ffffff', backgroundColor: '#13b2bc', fontWeight: 'bold'}}>Load More</Button>{' '}
              </Row>
              </>
              }
          </div>
        </div>
        <Modal isOpen={this.state.isOpen} size='lg'>
          
          <ModalBody>
          <AreaChart
          colors={["#13b2bc", "#666"]}
          curve={true}
          data={this.props.coinHistory.length > 0 && this.composeChart()}
          prefix="$"
          xtitle="Date"
          ytitle="Price"
          /> 
        </ModalBody> 
          <ModalFooter>
            <Button color="primary" style={{backgroundColor: '#13b2bc', borderColor: '#13b2bc'}} onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  coins: state.fetchCoinsReducer.coins,
  isLoading: state.fetchCoinsReducer.isLoading,
  coinHistory: state.fetchCoinHistoryReducer.coinHistory,
  locationData: state.getLocationReducer.locationData
});

export default connect(mapStateToProps, {
  fetchCoinsAction, fetchCoinHistoryAction, getLocatioData
})(withRouter(GetCoins));