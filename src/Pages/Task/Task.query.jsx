import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default graphql(
    gql`
        query allRewards($page: Int!, $campaign_id: ID!) {
            allRewards(page: $page, filter: {campaign_id: $campaign_id}) {
                name
                description
                image
                quantity
                points
                capPerAmbassador
            }
        }
    `,
    {
        options: () => ({ variables: { page: 0, campaign_id: "001" } }),
        props: ({ data = {} }) => ({ campaignXRewards: data.allRewards || [] }),
    },
);
