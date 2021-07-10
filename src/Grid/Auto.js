import React from 'react';
import styled from 'styled-components';

const Father = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: repeat(4, 100px);
  grid-auto-rows: 100px;
  grid-auto-columns: 100px;
  grid-auto-flow: column;
  gap: 5px;
  
`

const Container = styled.div`
  background-color: #2ecc71;
`

const Auto = () => {
  return (<Father>
    <Container>1</Container>
    <Container>2</Container>
    <Container>3</Container>
    <Container>4</Container>
    <Container>5</Container>
    <Container>6</Container>
    <Container>7</Container>
    <Container>8</Container>
    <Container>9</Container>
    <Container>10</Container>
    <Container>11</Container>
    <Container>12</Container>
    <Container>13</Container>
    <Container>14</Container>
    <Container>15</Container>
    <Container>16</Container>
    <Container>17</Container>
    <Container>18</Container>
    <Container>19</Container>
    <Container>20</Container>
    <Container>21</Container>
    <Container>22</Container>
    <Container>23</Container>
    <Container>24</Container>
  </Father>);
}

export default Auto;