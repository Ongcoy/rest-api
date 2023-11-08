const controller = {
    get: (req, res) => {
        return res
        .status(200)
        .json({message:"This is a request from user"});
    
    },
    post: (req,res) => {
        const {username, password} = req.body;

        if(!username || !password) {
            return res.status(400).json({message: "Username/Password is required"});
        }


        return res
        .status(200)
        .json({message:"This is post request"});
    },
    put: (req, res) => {
        const id = req.params.id;
      //  const {id} = req.params;
      return res.json("Put")
    }
};

export default controller;
