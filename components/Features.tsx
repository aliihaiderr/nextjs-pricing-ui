"use client";
import React from "react";
import { Text, HStack, Icon, StackProps, Box } from "@chakra-ui/react";
import {
  MoneyBackGuarantee,
  HassleFree,
  MonthlySubscription,
} from "../public/icons/Icon";

interface FeatureProps extends StackProps {
  icon: ElementType;
}

function Feature(props: FeatureProps) {
  const { icon, children, ...rest } = props;
  return (
    <HStack {...rest} spacing="24px">
      <Icon as={icon} boxSize="48px" />
      <Text fontSize="18px" fontWeight="700px" textAlign="left">
        {children}
      </Text>
    </HStack>
  );
}

export function Features() {
  return (
    <Box maxW="1024px" m="auto" pt="60px" pb="32px">
      <HStack px="48px" spacing="20px" fontWeight="700">
        <Feature icon={MoneyBackGuarantee}>
          30 days money back Guarantee
        </Feature>
        <Feature icon={HassleFree}>No setup fees 100% hassle-free</Feature>
        <Feature icon={MonthlySubscription}>
          No monthly subscription Pay once and for all
        </Feature>
      </HStack>
    </Box>
  );
}
