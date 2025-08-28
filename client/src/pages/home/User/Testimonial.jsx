import React from "react";
import { useState ,useEffect} from "react";
import Button from "../../../Components/Button";
import { AddComment, GetAllcomment } from "../../../apicalls/users";
import { showLoader, hideLoader } from "../../../redux/loadersSlice";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";
import { useNavigate } from "react-router-dom";
function Testimonial() {
  const [comments = [], setComments = []] = useState([]);
  const [showComments = false, setShowComments = false] = useState(true);
  const [showAddComments = false, setShowAddComments = false] = useState(false);
  const [comment = "", setComment = ""] = useState("");
  const { id } = useParams();
  const { currentUser } = useSelector((state) => state.usersReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      dispatch(showLoader());

      const commentResponse = await GetAllcomment(id);

      if (commentResponse.success) {
        setComments(commentResponse.data);
      }

      dispatch(hideLoader());
    } catch (error) {
      dispatch(hideLoader());
      toast.error("Something went wrong");
    }
  };

  const addComment = async () => {
    try {
      dispatch(showLoader());
      const response = await AddComment({
        user: currentUser._id,
        comment,
      });
      if (response.success) {
        getData();
        setComment("");
        setShowAddComments(false);
        toast.success(response.message)
      } else {
        toast.error(response.message);
      }
      dispatch(hideLoader());
    } catch (error) {
      dispatch(hideLoader());
      toast.error(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
   <section className="py-8 min-h-[560px]">
      <div className="max-w-6xl mx-auto px-6 mt-6"> 
        
        <div className="flex items-start justify-between ">
          <div>
            <p className="text-blue-600 font-semibold">Testimonial</p>
            <h2 className="text-3xl font-extrabold leading-tight">
              Have a suggestion or spotted 
            </h2>
            <h2 className="text-3xl font-extrabold leading-tight  mt-1">
                a road issue?
            </h2>
          </div>

          
          {!showAddComments && (
            <button
              onClick={() => setShowAddComments(true)}
              className="text-blue-600 underline flex items-center gap-2 text-sm font-black"
            >
              
              Write a Testimonial
            </button>
          )}
        </div>

       
        {showAddComments && (
          <div className="mb-6 p-5 bg-white rounded-lg shadow-sm border">
            <textarea
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
              placeholder="Write your comment..."
            />
            <div className="flex justify-end gap-3 mt-3">
              <Button title="Cancel" onClick={() => setShowAddComments(false)} />
              <Button title="Add Comment" onClick={addComment} />
            </div>
          </div>
        )}

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {comments && comments.length > 0 ? (
            comments.map((c) => (
              <article
                key={c._id}
                className="bg-white rounded-md border border-gray-200 shadow-lg p-5 flex flex-col h-full"
               
                style={{ aspectRatio: "1 / 1" }}
              >
               
                <div className="flex items-start justify-between ">
                  <div className="flex items-start gap-3">
                    <div
                      className="h-10 w-10 rounded-full bg-indigo-50 text-indigo-700 font-semibold flex items-center justify-center"
                      title={c.user?.name || "User"}
                    >
                      {c.user?.name ? c.user.name[0].toUpperCase() : "U"}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-gray-800 truncate">
                        {c.user?.name || "Anonymous"}
                      </h3>
                      <p className="text-xs text-gray-400 mt-1">
                        {moment(c.createdAt).format("DD MMM, YYYY")}
                      </p>
                    </div>
                  </div>

                </div>

               
                <div className="mt-4 text-gray-700 text-sm leading-relaxed overflow-auto flex-1 h-[20px]">
                  <p className="whitespace-pre-line">{c.comment}</p>
                </div>
              </article>
            ))
          ) : (
            
            <>
              {Array.from({ length: 4 }).map((_, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-gray-100 shadow-md p-5 animate-pulse h-[10px]"
                  style={{ aspectRatio: "1 / 1" }}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
