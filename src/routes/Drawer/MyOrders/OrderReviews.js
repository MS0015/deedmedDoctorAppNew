import React from 'react';
import { SafeAreaView } from 'react-native';
import Header from '../../../comp/Header';
import ReviewCard from '../../../comp/ReviewCard';

export default function OrderReviews() {
  return (
    <SafeAreaView>
      <Header title="Order Reviews" />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </SafeAreaView>
  );
}
