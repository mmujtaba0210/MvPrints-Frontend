import SearchFilter from "./filters/SearchFilter";
import CategoryFilter from "./filters/CategoryFilter";
import PriceFilter from "./filters/PriceFilter";
import TopProducts from "./filters/TopProducts";
import ColorFilter from "./filters/ColorFilter";
import RatingFilter from "./filters/RatingFilter";
import TagsFilter from "./filters/TagsFilter";

export default function Sidebar({ filters = {}, setFilters = () => {} }) {
  return (
    <div className="space-y-6 p-6 border rounded-2xl mt-4">
      <SearchFilter filters={filters} setFilters={setFilters} />
      <CategoryFilter filters={filters} setFilters={setFilters} />
      <PriceFilter min={0} max={160} onFilter={() => {}} />
      <TopProducts />
      <ColorFilter filters={filters} setFilters={setFilters} />
      <RatingFilter filters={filters} setFilters={setFilters} />
      <TagsFilter filters={filters} setFilters={setFilters} />
    </div>
  );
}
