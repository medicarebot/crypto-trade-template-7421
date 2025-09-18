import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, ThumbsUp, ThumbsDown } from "lucide-react";

interface ProductReviewsProps {
  productId: number;
}

export const ProductReviews = ({ productId }: ProductReviewsProps) => {
  const reviews = [
    {
      id: 1,
      author: "Mike Johnson",
      rating: 5,
      title: "Excellent precision and reliability",
      content: "This robot arm has exceeded our expectations. The precision is outstanding and it's been running 24/7 for 3 months without any issues. Great investment for our manufacturing line.",
      date: "2024-01-10",
      verified: true,
      helpful: 12,
      avatar: ""
    },
    {
      id: 2,
      author: "Sarah Chen",
      rating: 4,
      title: "Good value for money",
      content: "Works well for our automation needs. Setup was straightforward and the documentation is comprehensive. Only minor issue is the noise level during operation.",
      date: "2024-01-08",
      verified: true,
      helpful: 8,
      avatar: ""
    },
    {
      id: 3,
      author: "David Wilson",
      rating: 5,
      title: "Perfect for our production line",
      content: "Integrates seamlessly with our existing systems. The programmability options are extensive and the support team is very responsive.",
      date: "2024-01-05",
      verified: false,
      helpful: 15,
      avatar: ""
    }
  ];

  const averageRating = 4.7;
  const totalReviews = 127;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating
            ? 'fill-primary text-primary'
            : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <div className="space-y-6">
      {/* Reviews Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Customer Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold">{averageRating}</div>
              <div className="flex justify-center mb-1">
                {renderStars(Math.floor(averageRating))}
              </div>
              <div className="text-sm text-muted-foreground">
                {totalReviews} reviews
              </div>
            </div>
            <div className="flex-1">
              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="flex items-center space-x-2 mb-1">
                  <span className="text-sm w-3">{stars}</span>
                  <Star className="w-3 h-3 fill-primary text-primary" />
                  <div className="flex-1 bg-secondary rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{
                        width: `${stars === 5 ? 70 : stars === 4 ? 20 : stars === 3 ? 5 : stars === 2 ? 3 : 2}%`
                      }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-8">
                    {stars === 5 ? 89 : stars === 4 ? 25 : stars === 3 ? 7 : stars === 2 ? 4 : 2}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <Button className="w-full">Write a Review</Button>
        </CardContent>
      </Card>

      {/* Individual Reviews */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Avatar>
                  <AvatarImage src={review.avatar} />
                  <AvatarFallback>
                    {review.author.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-medium">{review.author}</span>
                    {review.verified && (
                      <Badge variant="secondary" className="text-xs">
                        Verified Purchase
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex">
                      {renderStars(review.rating)}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {new Date(review.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h4 className="font-medium mb-2">{review.title}</h4>
                  <p className="text-sm mb-4">{review.content}</p>
                  <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="sm">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      Helpful ({review.helpful})
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ThumbsDown className="w-4 h-4 mr-1" />
                      Not helpful
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline">Load More Reviews</Button>
      </div>
    </div>
  );
};