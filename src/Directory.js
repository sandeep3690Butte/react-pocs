import React from "react";

export default function Directory(props) {
  const response = [
    {
      type: "folder",
      name: "animals",
      path: "/animals",
      children: [
        {
          type: "folder",
          name: "cat",
          path: "/animals/cat",
          children: [
            {
              type: "folder",
              name: "images",
              path: "/animals/cat/images",
              children: [
                {
                  type: "file",
                  name: "cat001.jpg",
                  path: "/animals/cat/images/cat001.jpg"
                },
                {
                  type: "file",
                  name: "cat001.jpg",
                  path: "/animals/cat/images/cat002.jpg"
                }
              ]
            }
          ]
        }
      ]
    }
  ];
}
