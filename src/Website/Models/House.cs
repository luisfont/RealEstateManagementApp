using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Website.Models
{
    public class House : Property
    {
        int _rooms;
        double _bathrooms;

        public int Rooms
        {
            get
            {
                return _rooms;
            }
            set
            {
                if (_rooms != value)
                    _rooms = value;
            }
        }

        public double Bathrooms
        {
            get
            {
                return _bathrooms;
            }
            set
            {
                _bathrooms = value;
            }
        }
    }
}
