import { API, graphqlOperation, Auth } from "aws-amplify";

export const getCommonChatRoomWithUser = async (userId) => {
  const authUser = await Auth.currentAuthenticatedUser();

  // Get all chatrooms of user 1
  const response = await API.graphql(
    graphqlOperation(listChatRooms, { id: authUser.attributes.sub })
  );

  const chatRooms = response.data?.getUser?.ChatRooms?.items || [];

  console.log(chatRooms[0].chatRoom.users.items[0]);

  const chatRoom = chatRooms.find((chatRoomItem) => {
    return chatRoomItem.chatRoom.users.items.some(
      (userItem) => userItem.user.id === userId
    );
  });

  return chatRoom;
};

export const listChatRooms = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      ChatRooms {
        items {
          chatRoom {
            id
            users {
              items {
                user {
                  id
                }
              }
            }
          }
        }
      }
    }
  }
`;
