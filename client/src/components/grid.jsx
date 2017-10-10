import React from 'react'
import Cell from './cell'
import {createCells} from '../models/create_cells.js'

class Grid extends React.Component{

  renderCell(i){
    //console.log('Grid, renderCell...')
    let bgColor = undefined
    this.props.cells[i] ? bgColor = '#000' : bgColor = '#fff'
    return <Cell
      disabled = {this.props.disabled}
      bgColor={{background:bgColor}}
      onClick={() => this.props.onClick(i)}
    />
  }


  render(){
    //console.log('Grid, render...')
    //let indices = []
    //for (let i = 0; i < (this.props.rowLen * this.props.rowLen); i++){ indices.push(i)
    //}

    //let rows = createCells().forEach((row) => {
    // if (index % this.state.rowLen === 0){
    //   return <div className='grid-row'> 
    // } else if (index % this.state.rowLen === rowLen - 1) {
    //   return <div>{this.renderCell}(index)</div></div>
    //} else {
    //   return <div>{this.renderCell}(index)</div>
    // }
    //})
    //console.log(rows)

    //render(){
    //return (
    //   <div>
    //     {rows} 
    //   </div>
    // )
    //}
    
    if (this.props.rowLen === 10){
      return (
        <div>
          <div className='grid-row'>
            {this.renderCell(0)}
            {this.renderCell(1)}
            {this.renderCell(2)}
            {this.renderCell(3)}
            {this.renderCell(4)}
            {this.renderCell(5)}
            {this.renderCell(6)}
            {this.renderCell(7)}
            {this.renderCell(8)}
            {this.renderCell(9)}
          </div>
          <div className='grid-row'>
            {this.renderCell(10)}
            {this.renderCell(11)}
            {this.renderCell(12)}
            {this.renderCell(13)}
            {this.renderCell(14)}
            {this.renderCell(15)}
            {this.renderCell(16)}
            {this.renderCell(17)}
            {this.renderCell(18)}
            {this.renderCell(19)}
          </div>
          <div className='grid-row'>
            {this.renderCell(20)}
            {this.renderCell(21)}
            {this.renderCell(22)}
            {this.renderCell(23)}
            {this.renderCell(24)}
            {this.renderCell(25)}
            {this.renderCell(26)}
            {this.renderCell(27)}
            {this.renderCell(28)}
            {this.renderCell(29)}
          </div>
          <div className='grid-row'>
            {this.renderCell(30)}
            {this.renderCell(31)}
            {this.renderCell(32)}
            {this.renderCell(33)}
            {this.renderCell(34)}
            {this.renderCell(35)}
            {this.renderCell(36)}
            {this.renderCell(37)}
            {this.renderCell(38)}
            {this.renderCell(39)}
          </div>
          <div className='grid-row'>
            {this.renderCell(40)}
            {this.renderCell(41)}
            {this.renderCell(42)}
            {this.renderCell(43)}
            {this.renderCell(44)}
            {this.renderCell(45)}
            {this.renderCell(46)}
            {this.renderCell(47)}
            {this.renderCell(48)}
            {this.renderCell(49)}
          </div>
          <div className='grid-row'>
            {this.renderCell(50)}
            {this.renderCell(51)}
            {this.renderCell(52)}
            {this.renderCell(53)}
            {this.renderCell(54)}
            {this.renderCell(55)}
            {this.renderCell(56)}
            {this.renderCell(57)}
            {this.renderCell(58)}
            {this.renderCell(59)}
          </div>
          <div className='grid-row'>
            {this.renderCell(60)}
            {this.renderCell(61)}
            {this.renderCell(62)}
            {this.renderCell(63)}
            {this.renderCell(64)}
            {this.renderCell(65)}
            {this.renderCell(66)}
            {this.renderCell(67)}
            {this.renderCell(68)}
            {this.renderCell(69)}
          </div>
          <div className='grid-row'>
            {this.renderCell(70)}
            {this.renderCell(71)}
            {this.renderCell(72)}
            {this.renderCell(73)}
            {this.renderCell(74)}
            {this.renderCell(75)}
            {this.renderCell(76)}
            {this.renderCell(77)}
            {this.renderCell(78)}
            {this.renderCell(79)}
          </div>
          <div className='grid-row'>
            {this.renderCell(80)}
            {this.renderCell(81)}
            {this.renderCell(82)}
            {this.renderCell(83)}
            {this.renderCell(84)}
            {this.renderCell(85)}
            {this.renderCell(86)}
            {this.renderCell(87)}
            {this.renderCell(88)}
            {this.renderCell(89)}
          </div>
          <div className='grid-row'>
            {this.renderCell(90)}
            {this.renderCell(91)}
            {this.renderCell(92)}
            {this.renderCell(93)}
            {this.renderCell(94)}
            {this.renderCell(95)}
            {this.renderCell(96)}
            {this.renderCell(97)}
            {this.renderCell(98)}
            {this.renderCell(99)}
          </div>
        </div>
    )}

    if (this.props.rowLen === 20){
      return (
        <div>
          <div className='grid-row'>
            {this.renderCell(0)}
            {this.renderCell(1)}
            {this.renderCell(2)}
            {this.renderCell(3)}
            {this.renderCell(4)}
            {this.renderCell(5)}
            {this.renderCell(6)}
            {this.renderCell(7)}
            {this.renderCell(8)}
            {this.renderCell(9)}
            {this.renderCell(10)}
            {this.renderCell(11)}
            {this.renderCell(12)}
            {this.renderCell(13)}
            {this.renderCell(14)}
            {this.renderCell(15)}
            {this.renderCell(16)}
            {this.renderCell(17)}
            {this.renderCell(18)}
            {this.renderCell(19)}
          </div>
          <div className='grid-row'>
            {this.renderCell(20)}
            {this.renderCell(21)}
            {this.renderCell(22)}
            {this.renderCell(23)}
            {this.renderCell(24)}
            {this.renderCell(25)}
            {this.renderCell(26)}
            {this.renderCell(27)}
            {this.renderCell(28)}
            {this.renderCell(29)}
            {this.renderCell(30)}
            {this.renderCell(31)}
            {this.renderCell(32)}
            {this.renderCell(33)}
            {this.renderCell(34)}
            {this.renderCell(35)}
            {this.renderCell(36)}
            {this.renderCell(37)}
            {this.renderCell(38)}
            {this.renderCell(39)}
          </div>
          <div className='grid-row'>
            {this.renderCell(40)}
            {this.renderCell(41)}
            {this.renderCell(42)}
            {this.renderCell(43)}
            {this.renderCell(44)}
            {this.renderCell(45)}
            {this.renderCell(46)}
            {this.renderCell(47)}
            {this.renderCell(48)}
            {this.renderCell(49)}
            {this.renderCell(50)}
            {this.renderCell(51)}
            {this.renderCell(52)}
            {this.renderCell(53)}
            {this.renderCell(54)}
            {this.renderCell(55)}
            {this.renderCell(56)}
            {this.renderCell(57)}
            {this.renderCell(58)}
            {this.renderCell(59)}
          </div>
          <div className='grid-row'>
            {this.renderCell(60)}
            {this.renderCell(61)}
            {this.renderCell(62)}
            {this.renderCell(63)}
            {this.renderCell(64)}
            {this.renderCell(65)}
            {this.renderCell(66)}
            {this.renderCell(67)}
            {this.renderCell(68)}
            {this.renderCell(69)}
            {this.renderCell(70)}
            {this.renderCell(71)}
            {this.renderCell(72)}
            {this.renderCell(73)}
            {this.renderCell(74)}
            {this.renderCell(75)}
            {this.renderCell(76)}
            {this.renderCell(77)}
            {this.renderCell(78)}
            {this.renderCell(79)}
          </div>
          <div className='grid-row'>
            {this.renderCell(80)}
            {this.renderCell(81)}
            {this.renderCell(82)}
            {this.renderCell(83)}
            {this.renderCell(84)}
            {this.renderCell(85)}
            {this.renderCell(86)}
            {this.renderCell(87)}
            {this.renderCell(88)}
            {this.renderCell(89)}
            {this.renderCell(90)}
            {this.renderCell(91)}
            {this.renderCell(92)}
            {this.renderCell(93)}
            {this.renderCell(94)}
            {this.renderCell(95)}
            {this.renderCell(96)}
            {this.renderCell(97)}
            {this.renderCell(98)}
            {this.renderCell(99)}
          </div>
          <div className='grid-row'>
            {this.renderCell(100)}
            {this.renderCell(101)}
            {this.renderCell(102)}
            {this.renderCell(103)}
            {this.renderCell(104)}
            {this.renderCell(105)}
            {this.renderCell(106)}
            {this.renderCell(107)}
            {this.renderCell(108)}
            {this.renderCell(109)}
            {this.renderCell(110)}
            {this.renderCell(111)}
            {this.renderCell(112)}
            {this.renderCell(113)}
            {this.renderCell(114)}
            {this.renderCell(115)}
            {this.renderCell(116)}
            {this.renderCell(117)}
            {this.renderCell(118)}
            {this.renderCell(119)}
          </div>
          <div className='grid-row'>
            {this.renderCell(120)}
            {this.renderCell(121)}
            {this.renderCell(122)}
            {this.renderCell(123)}
            {this.renderCell(124)}
            {this.renderCell(125)}
            {this.renderCell(126)}
            {this.renderCell(127)}
            {this.renderCell(128)}
            {this.renderCell(129)}
            {this.renderCell(130)}
            {this.renderCell(131)}
            {this.renderCell(132)}
            {this.renderCell(133)}
            {this.renderCell(134)}
            {this.renderCell(135)}
            {this.renderCell(136)}
            {this.renderCell(137)}
            {this.renderCell(138)}
            {this.renderCell(139)}
          </div>
          <div className='grid-row'>
            {this.renderCell(140)}
            {this.renderCell(141)}
            {this.renderCell(142)}
            {this.renderCell(143)}
            {this.renderCell(144)}
            {this.renderCell(145)}
            {this.renderCell(146)}
            {this.renderCell(147)}
            {this.renderCell(148)}
            {this.renderCell(149)}
            {this.renderCell(150)}
            {this.renderCell(151)}
            {this.renderCell(152)}
            {this.renderCell(153)}
            {this.renderCell(154)}
            {this.renderCell(155)}
            {this.renderCell(156)}
            {this.renderCell(157)}
            {this.renderCell(158)}
            {this.renderCell(159)}
          </div>
          <div className='grid-row'>
            {this.renderCell(160)}
            {this.renderCell(161)}
            {this.renderCell(162)}
            {this.renderCell(163)}
            {this.renderCell(164)}
            {this.renderCell(165)}
            {this.renderCell(166)}
            {this.renderCell(167)}
            {this.renderCell(168)}
            {this.renderCell(169)}
            {this.renderCell(170)}
            {this.renderCell(171)}
            {this.renderCell(172)}
            {this.renderCell(173)}
            {this.renderCell(174)}
            {this.renderCell(175)}
            {this.renderCell(176)}
            {this.renderCell(177)}
            {this.renderCell(178)}
            {this.renderCell(179)}
          </div>
          <div className='grid-row'>
            {this.renderCell(180)}
            {this.renderCell(181)}
            {this.renderCell(182)}
            {this.renderCell(183)}
            {this.renderCell(184)}
            {this.renderCell(185)}
            {this.renderCell(186)}
            {this.renderCell(187)}
            {this.renderCell(188)}
            {this.renderCell(189)}
            {this.renderCell(190)}
            {this.renderCell(191)}
            {this.renderCell(192)}
            {this.renderCell(193)}
            {this.renderCell(194)}
            {this.renderCell(195)}
            {this.renderCell(196)}
            {this.renderCell(197)}
            {this.renderCell(198)}
            {this.renderCell(199)}
          </div>
          <div className='grid-row'>
            {this.renderCell(200)}
            {this.renderCell(201)}
            {this.renderCell(202)}
            {this.renderCell(203)}
            {this.renderCell(204)}
            {this.renderCell(205)}
            {this.renderCell(206)}
            {this.renderCell(207)}
            {this.renderCell(208)}
            {this.renderCell(209)}
            {this.renderCell(210)}
            {this.renderCell(211)}
            {this.renderCell(212)}
            {this.renderCell(213)}
            {this.renderCell(214)}
            {this.renderCell(215)}
            {this.renderCell(216)}
            {this.renderCell(217)}
            {this.renderCell(218)}
            {this.renderCell(219)}
          </div>
          <div className='grid-row'>
            {this.renderCell(220)}
            {this.renderCell(221)}
            {this.renderCell(222)}
            {this.renderCell(223)}
            {this.renderCell(224)}
            {this.renderCell(225)}
            {this.renderCell(226)}
            {this.renderCell(227)}
            {this.renderCell(228)}
            {this.renderCell(229)}
            {this.renderCell(230)}
            {this.renderCell(231)}
            {this.renderCell(232)}
            {this.renderCell(233)}
            {this.renderCell(234)}
            {this.renderCell(235)}
            {this.renderCell(236)}
            {this.renderCell(237)}
            {this.renderCell(238)}
            {this.renderCell(239)}
          </div>
          <div className='grid-row'>
            {this.renderCell(240)}
            {this.renderCell(241)}
            {this.renderCell(242)}
            {this.renderCell(243)}
            {this.renderCell(244)}
            {this.renderCell(245)}
            {this.renderCell(246)}
            {this.renderCell(247)}
            {this.renderCell(248)}
            {this.renderCell(249)}
            {this.renderCell(250)}
            {this.renderCell(251)}
            {this.renderCell(252)}
            {this.renderCell(253)}
            {this.renderCell(254)}
            {this.renderCell(255)}
            {this.renderCell(256)}
            {this.renderCell(257)}
            {this.renderCell(258)}
            {this.renderCell(259)}
          </div>
          <div className='grid-row'>
            {this.renderCell(260)}
            {this.renderCell(261)}
            {this.renderCell(262)}
            {this.renderCell(263)}
            {this.renderCell(264)}
            {this.renderCell(265)}
            {this.renderCell(266)}
            {this.renderCell(267)}
            {this.renderCell(268)}
            {this.renderCell(269)}
            {this.renderCell(270)}
            {this.renderCell(271)}
            {this.renderCell(272)}
            {this.renderCell(273)}
            {this.renderCell(274)}
            {this.renderCell(275)}
            {this.renderCell(276)}
            {this.renderCell(277)}
            {this.renderCell(278)}
            {this.renderCell(279)}
          </div>
          <div className='grid-row'>
            {this.renderCell(280)}
            {this.renderCell(281)}
            {this.renderCell(282)}
            {this.renderCell(283)}
            {this.renderCell(284)}
            {this.renderCell(285)}
            {this.renderCell(286)}
            {this.renderCell(287)}
            {this.renderCell(288)}
            {this.renderCell(289)}
            {this.renderCell(290)}
            {this.renderCell(291)}
            {this.renderCell(292)}
            {this.renderCell(293)}
            {this.renderCell(294)}
            {this.renderCell(295)}
            {this.renderCell(296)}
            {this.renderCell(297)}
            {this.renderCell(298)}
            {this.renderCell(299)}
          </div>
          <div className='grid-row'>
            {this.renderCell(300)}
            {this.renderCell(301)}
            {this.renderCell(302)}
            {this.renderCell(303)}
            {this.renderCell(304)}
            {this.renderCell(305)}
            {this.renderCell(306)}
            {this.renderCell(307)}
            {this.renderCell(308)}
            {this.renderCell(309)}
            {this.renderCell(310)}
            {this.renderCell(311)}
            {this.renderCell(312)}
            {this.renderCell(313)}
            {this.renderCell(314)}
            {this.renderCell(315)}
            {this.renderCell(316)}
            {this.renderCell(317)}
            {this.renderCell(318)}
            {this.renderCell(319)}
          </div>
          <div className='grid-row'>
            {this.renderCell(320)}
            {this.renderCell(321)}
            {this.renderCell(322)}
            {this.renderCell(323)}
            {this.renderCell(324)}
            {this.renderCell(325)}
            {this.renderCell(326)}
            {this.renderCell(327)}
            {this.renderCell(328)}
            {this.renderCell(329)}
            {this.renderCell(330)}
            {this.renderCell(331)}
            {this.renderCell(332)}
            {this.renderCell(333)}
            {this.renderCell(334)}
            {this.renderCell(335)}
            {this.renderCell(336)}
            {this.renderCell(337)}
            {this.renderCell(338)}
            {this.renderCell(339)}
          </div>
          <div className='grid-row'>
            {this.renderCell(340)}
            {this.renderCell(341)}
            {this.renderCell(342)}
            {this.renderCell(343)}
            {this.renderCell(344)}
            {this.renderCell(345)}
            {this.renderCell(346)}
            {this.renderCell(347)}
            {this.renderCell(348)}
            {this.renderCell(349)}
            {this.renderCell(350)}
            {this.renderCell(351)}
            {this.renderCell(352)}
            {this.renderCell(353)}
            {this.renderCell(354)}
            {this.renderCell(355)}
            {this.renderCell(356)}
            {this.renderCell(357)}
            {this.renderCell(358)}
            {this.renderCell(359)}
          </div>
          <div className='grid-row'>
            {this.renderCell(360)}
            {this.renderCell(361)}
            {this.renderCell(362)}
            {this.renderCell(363)}
            {this.renderCell(364)}
            {this.renderCell(365)}
            {this.renderCell(366)}
            {this.renderCell(367)}
            {this.renderCell(368)}
            {this.renderCell(369)}
            {this.renderCell(370)}
            {this.renderCell(371)}
            {this.renderCell(372)}
            {this.renderCell(373)}
            {this.renderCell(374)}
            {this.renderCell(375)}
            {this.renderCell(376)}
            {this.renderCell(377)}
            {this.renderCell(378)}
            {this.renderCell(379)}
          </div>
          <div className='grid-row'>
            {this.renderCell(380)}
            {this.renderCell(381)}
            {this.renderCell(382)}
            {this.renderCell(383)}
            {this.renderCell(384)}
            {this.renderCell(385)}
            {this.renderCell(386)}
            {this.renderCell(387)}
            {this.renderCell(388)}
            {this.renderCell(389)}
            {this.renderCell(390)}
            {this.renderCell(391)}
            {this.renderCell(392)}
            {this.renderCell(393)}
            {this.renderCell(394)}
            {this.renderCell(395)}
            {this.renderCell(396)}
            {this.renderCell(397)}
            {this.renderCell(398)}
            {this.renderCell(399)}
          </div>
        </div>
    )}
  }
}

export default Grid