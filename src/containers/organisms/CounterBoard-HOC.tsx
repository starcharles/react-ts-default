import React, { VFC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CounterBoard from '../../components/organisms/CounterBoard';
import { CounterState } from '../../reducer';
import { add, decrement, increment } from '../../actions';

const EnhancedCounterBoard: VFC = () => {
  const count = useSelector<CounterState, number>((state) => state.count);
  const dispatch = useDispatch();

  return (
    <CounterBoard
      count={count}
      add={(amount) => dispatch(add(amount))}
      decrement={() => dispatch(decrement())}
      increment={() => dispatch(increment())}
    />
  );
};

export default EnhancedCounterBoard;
