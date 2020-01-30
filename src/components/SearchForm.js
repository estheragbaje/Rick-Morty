import React from 'react';
import { Input, Box } from '@chakra-ui/core';

export default function SearchForm(props) {
  return (
    <Box paddingY="20px">
      <Input
        type="search"
        onChange={props.onSearch}
        placeholder="search character"
        variant="outline"
      />
    </Box>
  );
}
