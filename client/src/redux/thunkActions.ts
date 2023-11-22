import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const body = {query: `{
  vehicles {
    title
    description
    icons {
      large
      medium
    }
    level
    type {
      name
      title
      icons {
        default
      }
    }
    nation {
      name
      title
      color
      icons {
        small
        medium
        large
      }
    }
  }
}`
}

export const allKorabli = createAsyncThunk('korabli/all', async () => {
  const response = await axios.post('https://vortex.korabli.su/api/graphql/glossary/', body) 
  return response.data.data;
});

